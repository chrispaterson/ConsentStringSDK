# Consent String SDK for C

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



