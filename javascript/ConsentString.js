export class ConsentString {

  constructor( str = null ) {

  }
  getConsentString() {};
  getVersion(){};
  getVendorListVersion(){};
  setGlobalVendorList( gvlObject ){};
  setCmpId( cmpId ){};
  setConsentScreen( screenId ){};
  getConsentScreen(){};
  setConsentLanguage( language ){};
  getConsentLanguage(){};
  setPurposesAllowed( purposeIdArray) {};
  getPurposesAllowed() {};
  setPurposeAllowed( purposeId, value ){};
  getPurposeAllowed( purposeId ){};
  setConsent( vendorId, valueBool ){};
  hasConsent( vendorId ) {};
}
