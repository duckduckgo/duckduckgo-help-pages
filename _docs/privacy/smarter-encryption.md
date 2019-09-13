---
title: Smarter Encryption 
category: Privacy
order: 242
---

<p>
    At DuckDuckGo, we do not collect or share any personal information. That's our
    <a href="https://duckduckgo.com/privacy">privacy policy</a> in a nutshell. For
    example, we do not store IP addresses in our server logs, and we do not create
    unique cookie IDs. As such, we do not even have the ability to create search or
    browsing histories for any individual — it's privacy by design.
</p>

<p>
    We believe getting the privacy you deserve should be as easy as closing the
    blinds, and we make privacy protection tools to help you seamlessly control
    your personal information online. These tools include the
    <a href="https://duckduckgo.com/app">DuckDuckGo Privacy Essentials</a> browser
    extension for Firefox, Chrome and Safari, as well as the
    <a href="https://duckduckgo.com/app">DuckDuckGo Privacy Browser</a> app for
    iOS and Android. They each contain several leading privacy technologies
    we've developed to reduce your digital footprint, such as DuckDuckGo Search,
    Tracker Blocking, and Smarter Encryption.
</p>

<p>
    This explanation is about our Smarter Encryption technology, and in particular
    network requests you may notice going to smarter_encryption.js from our apps
    and extensions. This technology is used to determine if a website can be upgraded
    to an encrypted version, both without breaking your browsing experience
    and completely protecting your privacy.
</p>

<p>
    With Smarter Encryption, your browsing will use encrypted connections more often.
    That means fewer prying eyes on your browsing history, like from your Internet
    provider or wi-fi snoopers. The way it works is we continually maintain a list
    of sites that support encryption. When you try to go to an unencrypted site that
    we know supports encryption (i.e. is on our list), we first automatically upgrade
    your connection to use the encrypted version of the website. It's seamless!
</p>

<p>
    Our Smarter Encryption list is quite large: over 10 million sites and growing.
    Due to this large size, the list cannot be fully stored in the apps or extensions
    installed on your devices. Instead, we store the most trafficked sites locally on
    your devices, and keep the rest of the list on our servers. 
</p>

<p>
    Here's how it works:
</p>

<ol>
    <li>You click or navigate to an insecure (http) domain such as http://help.duckduckgo.com</li>
    <li>The help.duckduckgo.com domain would first be looked up in your local list (the one on
    the device with the most trafficked sites) to see if it can be upgraded immediately.</li>
    <li>If not, it will be converted to a SHA-1 hash: c3673b7f703ecd4890c81fb520b6697687276622
    (see https://en.wikipedia.org/wiki/Hash_function & https://en.wikipedia.org/wiki/SHA-1 for
    more details on how that conversion works)</li>
    <li>The first four characters of this hash (c367) are sent to our anonymous smarter_encryption.js
    service. Our logs never contain IP addresses or other personal information, so just like
        anonymous queries on <a href="https://duckduckgo.com">DuckDuckGo Search</a>, we do not know anything about who is making these
    requests. Only you and your device know. Nevertheless, we added another layer of privacy
    protection to this anonymous service by only having your device send the first four characters
    of the hashed domain, such that in any case the service cannot tell what exact domain you
    are visiting.</li>
    <li>The anonymous service sends back any hashed domains from the full Smarter Encryption list
    that match the first four characters of the hash sent (e.g. https://duckduckgo.com/smarter_encryption.js?pv1=c367).
    It's possible that it will send back nothing (if nothing matches).</li>
    <li>Your device looks through the returned hashed domains to see if the hash of the domain
    you are visiting exactly matches one of hashed domains returned. If so, it is upgraded!</li>
</ol>

<p>
    <strong>To be clear, this means that your searches and browsing history are still completely anonymous.</strong>
</p>
<p>
    If you have any concerns, please feel free to
    <a href="https://help.duckduckgo.com/duckduckgo-help-pages/company/contact-us/">contact us</a>,
    or join the discussion in the <a href="https://reddit.com/r/duckduckgo">DuckDuckGo subreddit</a>.
</p>
