# Consent String SDK for Swift

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

## Swift


```
Class ConsentString
```


The ConsentString class is intended to read specific values from a given GDPR Consent String.  The Consent String must be provided on initialization and values may then be read.  Currently, manipulating the Consent String is outside the scope of this class.


<table>
  <tr>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><code>init<strong>(</strong>consentString:<strong> </strong>String<strong>)</strong></code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Creates new instance of a ConsentString object
   </td>
   <td><strong><code>@param consentString is the web-safe base64 encoded consent string</code></strong>
   </td>
  </tr>
  <tr>
   <td><code>var<strong> </strong>consentString<strong>:</strong>String<strong> </strong>{get set}</code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Get or set the consent string as web-safe base64 encoded bits ready to pass
   </td>
   <td><strong><code>get the web-safe base64 encoded consent string</code></strong>
<strong><code>set set a new base64 encoded consent string</code></strong>
   </td>
  </tr>
  <tr>
   <td><code>var<strong> </strong>vendorListVersion<strong>:</strong>Int<strong> </strong>{get}</code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>The consent string passed has a vendor list version encoded in it.  It is a single integer and not a sem-var
   </td>
   <td><strong><code>get the integer value representing the version of the vendor list this string was encoded with</code></strong>
   </td>
  </tr>
  <tr>
   <td><code>var<strong> </strong>cmpId<strong>:</strong>Int<strong> </strong>{get}</code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Each CMP has an id registered with the TCF
   </td>
   <td><strong><code>get the integer value representing the id of TCF registered CMP that encoded this string</code></strong>
   </td>
  </tr>
  <tr>
   <td><code>var<strong> </strong>consentScreen:Int<strong> </strong>{get}</code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>CMP Consented Screen ID
   </td>
   <td><strong><code>get the integer value representing the consent screen of the cmp for which consent was captured</code></strong>
   </td>
  </tr>
  <tr>
   <td><code>var<strong> </strong>consentLanguage:String<strong> </strong>{get}</code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>gets the language ISO 639-1 code in lowercase
   </td>
   <td><strong><code>get the length 2 string of ISO 639-1 Character code in lowercase</code></strong>
   </td>
  </tr>
  <tr>
   <td><code>var<strong> </strong>purposesAllowed:[Int8]<strong> </strong>{get}</code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Returns an array of purposes allowed
   </td>
   <td><strong><code>get the byte array of all purposes allowed by their id</code></strong>
   </td>
  </tr>
  <tr>
   <td><code>func<strong> </strong>purposeAllowed(forPurposeId purposeId:Int8)<strong> </strong>-> Bool</code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Whether or not a purpose by id is allowed or not
   </td>
   <td><strong><code>@param forPurposeId id specified by the IAB's processing purposes</code></strong>
<strong><code>@return true indicates purpose is allowed</code></strong>
   </td>
  </tr>
  <tr>
   <td><code>func<strong> </strong>isVendorAllowed(vendorId:Int)<strong> </strong>-> Bool</code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Whether a particular vendor by vendor id has consent or not
   </td>
   <td><strong><code>@param vendorId id specified by the IAB's global vendor list</code></strong>
<strong><code>@return true indicates consent</code></strong>
   </td>
  </tr>
</table>
