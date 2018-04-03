# Consent String SDK


# Overview

The purpose of this document is outline a Software Development Kit resource for both reading and writing the IAB EU's GDPR Consent and Transparency Framework's Consent String.  To reduce the chance of error in encoding and decoding the Consent String we must wrap the data in an open source module for Javascript, Java, python and C that will provide easy-to-use interface methods and abstract away the actual bit manipulation.  

In most cases, the reading of the consent string will be necessary on both front-end and back-end clients however writing of the consent string should only be handled in the front-end javascript client for the CMP as that is the interface at which the user designates their consent preferences to be passed along.


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
   <td><strong><code>setConsentScreen( screenId )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Sets the consent screen id.  The screen number is CMP and CmpVersion specific, and is for logging proof of consent
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
   <td><strong><code>getPurposeAllowed( purposeId )</code></strong>
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
   <td><strong><code>setConsent( vendorId, valueBool )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Sets consent value for a vendor id
   </td>
   <td><strong><code>@param vendorId vendor id to set consent value for</code></strong>
<strong><code>@param value the boolean value to set the consent to</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>hasConsent( vendorId )</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Returns whether or not a vendorId has consent or not.  Read either from what was set in <code>setConsent</code> or whatever was previously set by the initializing string.
   </td>
   <td><strong><code>@param vendorId vendor id to get the consent value for</code></strong>
<strong><code>@return boolean value of consent for that vendor id</code></strong>
   </td>
  </tr>
</table>



## Java

The primary use case of a server-side implementation is to read values of the consent string passed to it.


<table>
  <tr>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong><code>ConsentString( string str );</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Creates new instance of an ConsentString object
   </td>
   <td><strong><code>@param str is the web-safe base64 encoded consent string</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>string getConsentString();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Returns consent string as web-safe base64 encoded bits ready to pass
   </td>
   <td><strong><code>@return web-safe base64 encoded consent string</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>int getVendorListVersion();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>The consent string passed has a vendor list version encoded in it.  It is a single integer and not a sem-var
   </td>
   <td><strong><code>@return integer value representing the version of the vendor list this string was encoded with</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>int getCmpId();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Each CMP has an id registered with the TCF
   </td>
   <td><strong><code>@return integer value representing the id of TCF registered CMP that encoded this string</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>int getConsentScreen();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>CMP Consented Screen ID
   </td>
   <td><strong><code>@return integer value representing the consent screen of the cmp for which consent was captured</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>String getConsentLanguage();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>gets the language ISO 639-1 code in lowercase
   </td>
   <td><strong><code>@return length 2 string of ISO 639-1 Character code in lowercase</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>List<Byte> getPurposesAllowed();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Returns an array of purposes allowed
   </td>
   <td><strong><code>@return returns byte array of all purposes allowed by their id</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>boolean purposeAllowed( int purposeId );</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Whether or not a purpose by id is allowed or not
   </td>
   <td><strong><code>@param purposeId id specified by the IAB's processing purposes</code></strong>
<strong><code>@return true is allowed</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>boolean hasConsent( int vendorId );</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Whether a particular vendor by vendor id has consent or not
   </td>
   <td><strong><code>@param vendorId id specified by the IAB's global vendor list</code></strong>
<strong><code>@return true is consent</code></strong>
   </td>
  </tr>
</table>



## Python

The primary use case of a server-side implementation is to read values of the consent string passed to it.


<table>
  <tr>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong><code>ConsentString( str );</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Creates new instance of an ConsentString object
   </td>
   <td><strong><code>@param str is the web-safe base64 encoded consent string</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>get_consent_string();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Returns consent string as web-safe base64 encoded bits ready to pass
   </td>
   <td><strong><code>@return web-safe base64 encoded consent string</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>get_vendor_list_version();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>The consent string passed has a vendor list version encoded in it.  It is a single integer and not a sem-var
   </td>
   <td><strong><code>@return integer value representing the version of the vendor list this string was encoded with</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>get_cmp_id();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Each CMP has an id registered with the TCF
   </td>
   <td><strong><code>@return integer value representing the id of TCF registered CMP that encoded this string</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>get_consent_screen();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>CMP Consented Screen ID
   </td>
   <td><strong><code>@return integer value representing the consent screen of the cmp for which consent was captured</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>get_consent_language();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>gets the language ISO 639-1 code in lowercase
   </td>
   <td><strong><code>@return length 2 string of ISO 639-1 Character code in lowercase</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>get_purposes_allowed();</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Returns an array of purposes allowed
   </td>
   <td><strong><code>@return returns byte array of all purposes allowed by their id</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>purpose_allowed( purpose_id );</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Whether or not a purpose by id is allowed or not
   </td>
   <td><strong><code>@param purpose_id specified by the IAB's processing purposes</code></strong>
<strong><code>@return true is allowed</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong><code>has_consent( vendor_id );</code></strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Whether a particular vendor by vendor id has consent or not
   </td>
   <td><strong><code>@param vendor_id specified by the IAB's global vendor list</code></strong>
<strong><code>@return true is consent</code></strong>
   </td>
  </tr>
</table>



## C

The primary use case of a server-side implementation is to read values of the consent string passed to it.


<table>
  <tr>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong><code>CNSSDK_HANDLE * cnssdk_init_consent_handle(const char* str);</code></strong>
   </td>
  </tr>
  <tr>
   <td>Initialize consent structure
   </td>
   <td><strong><code>@param str - null terminated web-safe base64 encoded consent string.</code></strong>
<strong><code>@return handle or NULL if problem with input string</code></strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong><code>int32_t cnssdk_destroy_consent_handle(CNSSDK_HANDLE * handle);</code></strong>
   </td>
  </tr>
  <tr>
   <td>Close consent structure and free internal memory.
   </td>
   <td><strong><code>@param handle</code></strong>
<strong><code>@return 0 if successful</code></strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong><code>const char* cnssdk_get_consent_string(CNSSDK_HANDLE * handle); </code></strong>
   </td>
  </tr>
  <tr>
   <td>Return same null terminated web-safe base64 string used to initialize
   </td>
   <td><strong><code>@param handle</code></strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong><code>int32_t cnssdk_get_version(CNSSDK_HANDLE * handle);</code></strong>
   </td>
  </tr>
  <tr>
   <td>Returns Consent String version int
   </td>
   <td><strong><code>@param handle</code></strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong><code>int32_t cnssdk_get_vendor_list_version(CNSSDK_HANDLE * handle);</code></strong>
   </td>
  </tr>
  <tr>
   <td>Returns Consent String version int32_t
   </td>
   <td><strong><code>@param handle</code></strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong><code>int32_t cnssdk_get_cmp_id(CNSSDK_HANDLE * handle);</code></strong>
   </td>
  </tr>
  <tr>
   <td>Returns the vendor list version set on this Consent String
   </td>
   <td><strong><code>@param handle</code></strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>int32_t cnssdk_get_consent_screen(CNSSDK_HANDLE * handle);</strong>
   </td>
  </tr>
  <tr>
   <td>Returns the consent screen id int32_t
   </td>
   <td><strong><code>@param handle</code></strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>const char* cnssdk_get_consent_language(CNSSDK_HANDLE * handle);</strong>
   </td>
  </tr>
  <tr>
   <td>Get written language for consent dialogue as ISO 639-1 code char* length 2.  0=a 25=z
   </td>
   <td><strong><code>@param handle</code></strong>
<strong><code>@return null-terminated string of language (empty string if undetermined)</code></strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong><code>const int32_t cnssdk_get_purposes_allowed(CNSSDK_HANDLE * handle, int32_t **purpose_array, size_t &array_size);</code></strong>
   </td>
  </tr>
  <tr>
   <td>Get a pointer to the purposes allowed array.
   </td>
   <td><strong><code>@param handle</code></strong>
<strong><code>@param purpose_array - points to caller's array pointer</code></strong>
<strong><code>@param array_size - points to caller's array size.</code></strong>
<strong><code>@return 0 if successful </code></strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong><code>bool cnssdk_has_consent( CNSSDK_HANDLE * handle, int32_t vendorId );</code></strong>
   </td>
  </tr>
  <tr>
   <td>Whether or not a vendorId has consent or not.
   </td>
   <td><strong><code>@param handle</code></strong>
<strong><code>@param vendorId that we are checking for consent value</code></strong>
<strong><code>@return true if has consent false if no_consent</code></strong>
   </td>
  </tr>
</table>



