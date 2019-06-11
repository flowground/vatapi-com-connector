/**
 * Auto-generated action file for "VAT API" API.
 *
 * Generated at: 2019-06-06T13:13:16.632Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / vatapi-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'create_invoice'
 * Endpoint Path: '/invoice'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "Response-Type"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "Response_Type": "Response-Type",
    "business_address": "business_address",
    "business_name": "business_name",
    "conversion_rate": "conversion_rate",
    "currency_code": "currency_code",
    "currency_code_conversion": "currency_code_conversion",
    "customer_address": "customer_address",
    "customer_name": "customer_name",
    "customer_vat_number": "customer_vat_number",
    "date": "date",
    "discount_rate": "discount_rate",
    "items": "items",
    "notes": "notes",
    "price_type": "price_type",
    "tax_point": "tax_point",
    "type": "type",
    "vat_number": "vat_number",
    "zero_rated": "zero_rated",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['apikey'] = cfg['auth_apikey'];

    let callParams = {
        spec: spec,
        operationId: 'create_invoice',
        pathName: '/invoice',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}