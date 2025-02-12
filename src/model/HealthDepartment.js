/**
 * COVID-19 Local API
 * API to get local help information about COVID-19 (hotlines, websites, test sites, health departments)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The HealthDepartment model module.
 * @module model/HealthDepartment
 * @version 0.1.0
 */
class HealthDepartment {
    /**
     * Constructs a new <code>HealthDepartment</code>.
     * @alias module:model/HealthDepartment
     */
    constructor() { 
        
        HealthDepartment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HealthDepartment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HealthDepartment} obj Optional instance to populate.
     * @return {module:model/HealthDepartment} The populated <code>HealthDepartment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HealthDepartment();

            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('place')) {
                obj['place'] = ApiClient.convertToType(data['place'], 'String');
            }
            if (data.hasOwnProperty('geonames_id')) {
                obj['geonames_id'] = ApiClient.convertToType(data['geonames_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('zip_code')) {
                obj['zip_code'] = ApiClient.convertToType(data['zip_code'], 'Number');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('address_supplement')) {
                obj['address_supplement'] = ApiClient.convertToType(data['address_supplement'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('fax')) {
                obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('sources')) {
                obj['sources'] = ApiClient.convertToType(data['sources'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} country_code
 */
HealthDepartment.prototype['country_code'] = undefined;

/**
 * @member {String} place
 */
HealthDepartment.prototype['place'] = undefined;

/**
 * @member {Number} geonames_id
 */
HealthDepartment.prototype['geonames_id'] = undefined;

/**
 * @member {String} name
 */
HealthDepartment.prototype['name'] = undefined;

/**
 * @member {String} department
 */
HealthDepartment.prototype['department'] = undefined;

/**
 * @member {String} street
 */
HealthDepartment.prototype['street'] = undefined;

/**
 * @member {Number} zip_code
 */
HealthDepartment.prototype['zip_code'] = undefined;

/**
 * @member {String} city
 */
HealthDepartment.prototype['city'] = undefined;

/**
 * @member {String} address_supplement
 */
HealthDepartment.prototype['address_supplement'] = undefined;

/**
 * @member {String} phone
 */
HealthDepartment.prototype['phone'] = undefined;

/**
 * @member {String} fax
 */
HealthDepartment.prototype['fax'] = undefined;

/**
 * @member {String} email
 */
HealthDepartment.prototype['email'] = undefined;

/**
 * @member {String} website
 */
HealthDepartment.prototype['website'] = undefined;

/**
 * @member {String} sources
 */
HealthDepartment.prototype['sources'] = undefined;






export default HealthDepartment;

