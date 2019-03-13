---
title: Cloud Save
category: Settings
order: 66
---

<h4>Where are my settings stored?</h4>
<p>
    In browser cookies, which you can see in the, "Bookmarklet and settings data"
    link on the <a href="https://duckduckgo.com/settings">settings page</a>.
</p>

<h4>What information gets saved?</h4>
<p>
    Only the settings that you have changed. They are detailed on the
    <a href="https://duckduckgo.com/params">URL Parameters page</a>.
</p>

<h4>What does "cloud save" mean?</h4>
<p>
    If you choose, you can save your settings more permanently by entering a
    passphrase. This has a few benefits:
</p>
<ul>
    <li>you can share your settings among computers and browsers</li>
    <li>you can restore your settings after deleting cookies</li>
    <li>you can store several sets of settings for different purposes</li>
</ul>
<p>
    "Cloud computing" is an umbrella term for scalable third party data and
    software services. We use <a href="http://aws.amazon.com/s3/">Amazon S3</a>.
    As such we rely on Amazon's infrastructure for security and performance. In
    the future we may let you host your own DuckDuckGo data.
</p>

<h4>How does it work?</h4>
<p>
    Your passphrase is used to generate a key using the Secure Hash Algorithm
    known as <a href="http://wikipedia.org/wiki/SHA-2">SHA-2</a>, using a 512 bit
    key. Your passphrase never leaves the browser, only the key and the settings
    file associated with it. We save the settings file on Amazon S3 using the
    generated key as the name. In the interest of transparency, this data is not
    encrypted: you can see exactly what information we store. Passphrases cannot
    feasibly be reverse engineered from a key - even if you could do that, there
    is no point since all the information is there in the open, unencrypted,
    provided you know the key. DuckDuckGo does not ever know your passphrase.
</p>

<h4>How is it anonymous?</h4>
<p>
    We do not have usernames and we don't store any personally identifiable
    information.
</p>

<h4>How does passphrase generation work?</h4>
<p>
    Each time you ask for a passphrase suggestion, we get a reasonably large list
    of random words from the DuckDuckGo servers. In the browser, we then select
    four or five random words from that list, ensuring that it is at least 18-20
    characters long. It is easier to remember four or five words than 10 random
    letters and numbers, and far more secure.
</p>

<h4>How do I change my passphrase?</h4>
<p>
    You can do this by saving your settings under a different passphrase,
    optionally deleting the first set.
</p>
<ol>
    <li>Enable cloud save by entering your existing passphrase.</li>
    <li>
        Push "Delete my data". This removes the data from the cloud, but it remains
        in your browser until you click on "reset all settings to defaults".
    </li>
    <li>
        Enter a new passphrase and click "Save Settings". This will save your data
        under your new passphrase.
    </li>
</ol>

<h4>I forgot my passphrase. Can you recover it?</h4>
<p>
    No. Unless you deleted your settings, the settings file will still be there
    but we have no way of associating it with you. We cannot reverse the
    passphrase key generation. We don't associate your IP address or browser
    fingerprint or any other information with the file.
</p>

<h4>Is deleted data really deleted?</h4>
<p>
    Yes.
</p>

<h4>What is "JSON"?</h4>
<p>
    <a href="http://json.org/">JavaScript Object Notation</a> - a simple,
    human-readable data format.
</p>