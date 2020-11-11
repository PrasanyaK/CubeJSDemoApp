cube(`TblDatashipments`, {
  sql: `SELECT * FROM dbo."tbl_DataShipments"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [shipmentid, sname, scity, scountry, cname, ccity, ccountry, uniquename, createdate, lastupdated, shipdate, estdeliverydate, reqdeliverydate, deliverydate]
    }
  },
  
  dimensions: {
    shipmentid: {
      sql: `${CUBE}."ShipmentID"`,
      type: `string`
    },
    
    assignedcarrier: {
      sql: `${CUBE}."AssignedCarrier"`,
      type: `string`
    },
    
    pronumber: {
      sql: `${CUBE}."PRONumber"`,
      type: `string`
    },
    
    bolnumber: {
      sql: `${CUBE}."BOLNumber"`,
      type: `string`
    },
    
    clientref1: {
      sql: `${CUBE}."ClientRef1"`,
      type: `string`
    },
    
    clientref2: {
      sql: `${CUBE}."ClientRef2"`,
      type: `string`
    },
    
    clientref3: {
      sql: `${CUBE}."ClientRef3"`,
      type: `string`
    },
    
    clientref4: {
      sql: `${CUBE}."ClientRef4"`,
      type: `string`
    },
    
    clientref5: {
      sql: `${CUBE}."ClientRef5"`,
      type: `string`
    },
    
    sname: {
      sql: `${CUBE}."sName"`,
      type: `string`
    },
    
    sstreet: {
      sql: `${CUBE}."sStreet"`,
      type: `string`
    },
    
    scity: {
      sql: `${CUBE}."sCity"`,
      type: `string`
    },
    
    sstate: {
      sql: `${CUBE}."sState"`,
      type: `string`
    },
    
    szip: {
      sql: `${CUBE}."sZip"`,
      type: `string`
    },
    
    scountry: {
      sql: `${CUBE}."sCountry"`,
      type: `string`
    },
    
    cname: {
      sql: `${CUBE}."cName"`,
      type: `string`
    },
    
    cstreet: {
      sql: `${CUBE}."cStreet"`,
      type: `string`
    },
    
    ccity: {
      sql: `${CUBE}."cCity"`,
      type: `string`
    },
    
    cstate: {
      sql: `${CUBE}."cState"`,
      type: `string`
    },
    
    czip: {
      sql: `${CUBE}."cZip"`,
      type: `string`
    },
    
    ccountry: {
      sql: `${CUBE}."cCountry"`,
      type: `string`
    },
    
    declaredvalue: {
      sql: `${CUBE}."DeclaredValue"`,
      type: `string`
    },
    
    directioncode: {
      sql: `${CUBE}."DirectionCode"`,
      type: `string`
    },
    
    paymenttype: {
      sql: `${CUBE}."PaymentType"`,
      type: `string`
    },
    
    servicetypecode: {
      sql: `${CUBE}."ServiceTypeCode"`,
      type: `string`
    },
    
    specialinstructions: {
      sql: `${CUBE}."SpecialInstructions"`,
      type: `string`
    },
    
    comments: {
      sql: `${CUBE}."Comments"`,
      type: `string`
    },
    
    statuscode: {
      sql: `${CUBE}."StatusCode"`,
      type: `string`
    },
    
    uniquename: {
      sql: `${CUBE}."UniqueName"`,
      type: `string`
    },
    
    createdate: {
      sql: `${CUBE}."CreateDate"`,
      type: `time`
    },
    
    lastupdated: {
      sql: `${CUBE}."LastUpdated"`,
      type: `time`
    },
    
    shipdate: {
      sql: `${CUBE}."ShipDate"`,
      type: `time`
    },
    
    estdeliverydate: {
      sql: `${CUBE}."EstDeliveryDate"`,
      type: `time`
    },
    
    reqdeliverydate: {
      sql: `${CUBE}."ReqDeliveryDate"`,
      type: `time`
    },
    
    deliverydate: {
      sql: `${CUBE}."DeliveryDate"`,
      type: `time`
    }
  }
});
