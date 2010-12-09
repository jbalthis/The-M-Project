// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: (c) 2010 M-Way Solutions GmbH. All rights reserved.
// Creator:   Sebastian
// Date:      09.12.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================

CRMLight.Activity = M.Model.create({
    __name__: 'Activity', // is generated by generator

    /* Properties on basis of list in "Fachkonzept", page 9 */

    gvl: M.Model.attr('String', {   // gvl is blackberry client
       isRequired:YES 
    }),

    beginDate: M.Model.attr('String', {   // begindate
        isRequired: YES,
        validators: [M.DateValidator]
    }),

    endDate: M.Model.attr('String', {     // enddate
        isRequired: YES,
        validators: [M.DateValidator]
    }),

    createDate: M.Model.attr('String', {  // createdate
        isRequired: NO    
    }),

    modifyDate: M.Model.attr('String', {  // modifydate
        isRequired: NO
    }),

    category: M.Model.attr('String', {  // category
        isRequired: YES
    }),

    description: M.Model.attr('Text', { // desc
        isRequired: YES
    }),

    processType: M.Model.attr('String', {   // proctype
        isRequired: YES
    }),

    status: M.Model.attr('String', {    // status
        isRequired: YES
    }),

    activityReason: M.Model.attr('String', {    // actreason
        isRequired: YES
    }),

    goal: M.Model.attr('String', {  // 
        isRequired: YES
    }),

    result: M.Model.attr('String', { // result
        isRequired: YES
    }),

    resultReason: M.Model.attr('String', { // ?
        isRequired: YES
    }),

    text: M.Model.attr('Text', {    // appendtext
        isRequired: YES
    }),

    // maybe changed to link to a contact model
    responsiblePerson: M.Model.attr('String', { // responname  
        isRequired: YES
    }),

    isRead: M.Model.attr('Boolean', {   // read
        isRequired: NO
    }),

    customerId: M.Model.attr('Integer', {   // customer
        isRequired: YES,
        validators: [M.NumberValidator]
    })

    // hasOne: Customers

}, M.WebSqlProvider.configure({
    dbName: 'contacts_db'
}));