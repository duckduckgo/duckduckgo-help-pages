---
title: Safari 12 Update
category: Add-ons
order: 99
---


<h2>Safari 12 Update</h2>
<p>
    The Safari version of the DuckDuckGo browser extension no longer includes a
    tracker blocker. This is because upon upgrading to Safari 12, any extension
    that uses the canLoad API (which is the API required to block trackers)
    <a href="https://developer.apple.com/documentation/safariextensions" target="_blank">will be automatically disabled</a>. Rather than allow our extension to be automatically disabled for everyone,
    which would also revert everyone's search engine, we've chosen to remove this
    API from our Safari extension, and with it, our tracker blocker. This removal
    prevents the extension from being automatically disabled so everyone can
    continue using the extension in Safari to access DuckDuckGo Private Search.
</p>

<p>
    Safari is moving to a
    <a href="https://developer.apple.com/documentation/safariservices/safari_app_extensions" target="_blank">new model</a>
    for browser extensions that offers users greater security and performance. We
    hope to eventually be able to offer the full DuckDuckGo Privacy Essentials
    extension to Safari users within this new model.
</p>

<p>
    In the meantime, we offer extensions for
    <a href="https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-for-firefox/" target="_blank">Firefox</a>,
    <a href="https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg" target="_blank">Chrome and Vivaldi</a>, which still provide the full suite of privacy features.
</p>