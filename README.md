# Consent String SDK


# Overview

The purpose of this document is outline a Software Development Kit resource for both reading and writing the IAB EU's GDPR Consent and Transparency Framework's Consent String.  To reduce the chance of error in encoding and decoding the Consent String we must wrap the data in an open source module for Javascript, Java, python and C that will provide easy-to-use interface methods and abstract away the actual bit manipulation.  

In most cases, the reading of the consent string will be necessary on both front-end and back-end clients however writing of the consent string should only be handled in the front-end javascript client for the CMP as that is the interface at which the user designates their consent preferences to be passed along.

