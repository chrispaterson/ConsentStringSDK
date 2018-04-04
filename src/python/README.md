# Consent String SDK for Python

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
