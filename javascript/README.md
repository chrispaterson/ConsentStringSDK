# Consent String SDK for Javascript

# Terms


<table>
  <tr>
   <td>
<h4>TCF</h4>


   </td>
   <td>IAB EU's GDPR Transparency and Consent Framework
   </td>
  </tr>
  <tr>
   <td>
<h4>Vendor ID</h4>


   </td>
   <td>Refers to IAB EU hosted Global Vendor List id defined by the TCF
   </td>
  </tr>
  <tr>
   <td>
<h4>Consent String</h4>


   </td>
   <td>Refers to IAB EU Base64 encoded bit string representing user preference in the TCF
   </td>
  </tr>
  <tr>
   <td>
<h4>CMP</h4>


   </td>
   <td>"Consent Management Provider" as specified by the TCF -- ie. a javascript widget that captures users consent preferences and displays advertising information and vendors.
   </td>
  </tr>
  <tr>
   <td>
<h4>Consent Screen</h4>


   </td>
   <td>CMP Screen in which consent was confirmed.  A proprietary number to each CMP that is arbitrary.
   </td>
  </tr>
</table>



# Interface


## Javascript

The primary purpose of the Javascript CMP would be client-side CMPs.  This could also, however be used for server-side nodejs, but gives more interface set values for user consent preferences.


<table>
  <tr>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong><code>constructor( str = null )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Constructs new object 
   </td>
   <td><strong><code>@param str is the web-safe base64 encoded consent string or null (no parameter) to generate a new one</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>getConsentString()</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Gets the consent string either new one created or one passed in on construction.
   </td>
   <td><strong><code>@return web-safe base64 encoded consent string</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>getVersion()</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>The version number in which this consent string specification adheres to
   </td>
   <td><strong><code>@return integer version number of consent string specification</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>getVendorListVersion()</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Returns either the vendor list version set by <code>setGlobalVendorList</code> or whatever was previously set as the consent string when the object was created
   </td>
   <td><strong><code>@return integer version number of vendor list version</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>setGlobalVendorList( gvlObject )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Sets the global vendor list object.  Generally this would be the parsed JSON that comes from the IAB hosted Global Vendor List.
   </td>
   <td><strong><code>@param gvlObject is the parsed JSON that conforms to the IAB EU TCF Vendor List Specification</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>setCmpId( cmpId )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Sets CMP ID number that is assigned to your CMP from the IAB EU.  A unique ID will be assigned to each Consent Manager Provider
   </td>
   <td><strong><code>@param cmpId the id for the cmp setting the consent string values. </code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>getCmpId()</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Get the ID of the CMP from the consent string
   </td>
   <td><strong><code>@return CMP id</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>setCmpVersion( version )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Sets the version of the CMP code that created or updated the consent string
   </td>
   <td><strong><code>@param version CMP version</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>getCmpVersion()</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>The version of the CMP code that created or updated the consent string
   </td>
   <td><strong><code>@return version CMP version</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>setConsentScreen( screenId )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Sets the consent screen id.  The screen number is CMP and CMP Version specific, and is for logging proof of consent
<p>
					
   </td>
   <td><strong><code>@param screenId id for the screen in which the consent values were confirmed</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>getConsentScreen()</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>The screen number is CMP and CmpVersion specific, and is for logging proof of consent
   </td>
   <td><strong><code>@return screenId id for the screen in which the consent values were confirmed</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>setConsentLanguage( language )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Sets consent language. Two-letter ISO639-1 language code that CMP asked for consent in
   </td>
   <td><strong><code>@param language two character ISO639-1 language code</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>getConsentLanguage()</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>gets consent language. Two-letter ISO639-1 language code that CMP asked for consent in
   </td>
   <td><strong><code>@return language two character ISO639-1 language code</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>setPurposesAllowed( purposeIdArray)</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Sets the allowed purposes as an array of purpose ids
   </td>
   <td><strong><code>@param purposeIdArray variable length array of integers setting which purposes are allowed.  If the id is in the array it's allowed.</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>getPurposesAllowed()</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Gets an array of purposes allowed either set by <code>setPurposesAllowed</code> or whatever was previously set by the initializing consent string
   </td>
   <td><strong><code>@return variable length array of integers setting which purposes are allowed.  If the id is in the array it's allowed.</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>setPurposeAllowed( purposeId, value )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Sets a single purpose by id and boolean value
   </td>
   <td><strong><code>@param purposeId the purpose id</code></strong>
<strong><code>@param value the boolean value to set it to true for allowed false for not allowed</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>isPurposeAllowed( purposeId )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Gets a single purpose by id and returns boolean value
   </td>
   <td><strong><code>@param purposeId the purpose id</code></strong>
<strong><code>@return boolean value true for allowed false for not allowed</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>setVendorAllowed( vendorId, valueBool )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Sets consent value for a vendor id
   </td>
   <td><strong><code>@param vendorId - vendor id to set consent value for</code></strong>
<strong><code>@param value - the boolean value to set the consent to</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>isVendorAllowed( vendorId )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>For determining if the vendor consent value bit is turned on or off for a particular vendor id.
   </td>
   <td><strong><code>@param vendorId vendor id to see if consent is allowed for</code></strong>
<strong><code>@return boolean value of consent for that vendor id</code></strong>
   </td>
  </tr>
</table>
