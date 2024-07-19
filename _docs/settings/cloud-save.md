---
title: How To Use Cloud Save to Save and Sync Your DuckDuckGo Search Settings
nav_title: Save Settings With Cloud Save
description: Learn how to save and sync your settings for DuckDuckGo Private Search.
category: Search Results
order: 1000
---

#### Where are my settings stored?

In browser cookies, which you can see in the, "Bookmarklet and settings data" link on the [settings page](https://duckduckgo.com/settings).

#### What information gets saved?

Only the settings that you have changed. They are detailed on the [URL Parameters page](https://duckduckgo.com/params).

#### What does "cloud save" mean?

If you choose, you can save your settings more permanently by entering a passphrase. This has a few benefits:

-   you can share your settings among computers and browsers
-   you can restore your settings after deleting cookies
-   you can store several sets of settings for different purposes

"Cloud computing" is an umbrella term for scalable third party data and software services. For Cloud Save we use [Amazon S3](https://aws.amazon.com/s3/).

#### How does it work?

Your passphrase is used to generate a key using the Secure Hash Algorithm known as [SHA-2](http://wikipedia.org/wiki/SHA-2), using a 512 bit key. Your passphrase never leaves the browser, only the key and the settings file associated with it. We save the settings file on Amazon S3 using the generated key as the name. In the interest of transparency, this data is not encrypted: you can see exactly what information we store. Passphrases cannot feasibly be reverse engineered from a key - even if you could do that, there is no point since all the information is there in the open, unencrypted, provided you know the key. DuckDuckGo does not ever know your passphrase.

#### How is it anonymous?

We do not have usernames and we don't store any personally identifiable information.

#### How does passphrase generation work?

Each time you ask for a passphrase suggestion, we get a reasonably large list of random words from the DuckDuckGo servers. In the browser, we then select four or five random words from that list, ensuring that it is at least 18-20 characters long. It is easier to remember four or five words than 10 random letters and numbers, and far more secure.

#### How do I change my passphrase?

You can do this by saving your settings under a different passphrase, optionally deleting the first set.

1. Enable cloud save by entering your existing passphrase.
1. Push "Delete my data". This removes the data from the cloud, but it remains in your browser until you click on "reset all settings to defaults".
1. Enter a new passphrase and click "Save Settings". This will save your data under your new passphrase.

#### I forgot my passphrase. Can you recover it?

No. Unless you deleted your settings, the settings file will still be there but we have no way of associating it with you. We cannot reverse the passphrase key generation. We don't associate your IP address or browser fingerprint or any other information with the file.

#### Is deleted data really deleted?

Yes.

#### What is "JSON"?

[JavaScript Object Notation](http://json.org/) - a simple, human-readable data format.
