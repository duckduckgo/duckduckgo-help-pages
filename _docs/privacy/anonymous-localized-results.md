---
title: Anonymous Localized Results
category: Privacy
order: 99
---

<p>
    At DuckDuckGo, we don’t track you, ever. That’s our privacy policy in a nutshell. For example, we do not create unique cookies and, more generally, architect our product so that we do not even have the ability to create a search or browsing history for any individual — it’s privacy by design.
</p>

<p>
    At the same time, searchers often need accurate location-based results like local weather and restaurants. Interestingly, we can actually serve results (including instant answers and ads) for searches like these while still keeping you anonymous.
</p>

<p>
    To do this, we simply guess your location by default using a <a href="https://en.wikipedia.org/wiki/Internet_geolocation">GEO::IP</a> lookup with the IP address that is automatically sent to us via your device; then we throw away both the guessed location and the IP address, per our <a href="https://duckduckgo.com/privacy">privacy policy</a>. This process does not need to request any additional information than what you are already sending.
</p>

<p>
    Unfortunately, this process is not always accurate enough, especially on mobile phone networks that route traffic through a central hub, sometimes making you appear to us to be hundreds of miles away from where you actually are! As such, you may see a prompt asking you if you’d like to opt-in to improve the accuracy of your local search results.
</p>

<img alt="screenshot of warning screen" src="{{ site.baseurl }}/images/desktop_pul_prompt.png" />
<p>
    If you click “Enable Location,” you will then see a prompt like the one below. Major web browsers have access to more accurate location information using a variety of techniques, including WiFi databases, cell tower location databases, and GPS. When you see one of these standard browser prompts, you are allowing your browser to obtain this more accurate location for use by the requesting webpage. In our case, we engineered a solution to shield that more accurate location from us. If you'd rather choose a custom location, you can click "Set Manually" instead of "Enable Location." This bypasses the browser location permission, but still keeps your precise location anonymous to us.
</p>

<img alt="screenshot of browser location prompt" src="{{ site.baseurl }}/images/6631305e26ef2563263b3eb1c83b2a9e.png" />
<p>
    The location returned by the browser is stored locally on your device and is never sent to DuckDuckGo servers. After “Enabling Location” or choosing to “Set Manually”, the next time you perform a local search, code that runs locally in your browser will send us a random location nearby, while hiding your actual location from DuckDuckGo. We use that random location to generate your results, then throw it away.
</p>

<p>
    <strong>To be clear, this means that even if you opt-in to using a more accurate location, your searches will still be anonymous and DuckDuckGo never sees your actual location.</strong>
</p>

<p>
    That said, don’t forget as mentioned above that the variety of techniques browsers use to identify an accurate location may present their own privacy implications. These vary by browser and depend in part on the location service the browser uses. Most major browsers provide detailed information on the location service they use and its associated policies:
</p>
<ul>
    <li>
        Firefox (uses Google Location Services):
        <a href="https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites">https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites</a>
    </li>
    <li>
        Chrome (uses Google Location Services):
        <a href="https://policies.google.com/technologies/location-data?hl=en-US#how-find">https://policies.google.com/technologies/location-data?hl=en-US#how-find</a>
    </li>
    <li>
        Safari (uses Apple Location Services):
        <a href="https://support.apple.com/en-us/HT204690">https://support.apple.com/en-us/HT204690</a>
    </li>
    <li>
        Edge (uses Windows Location Services):
        <a href="https://support.microsoft.com/en-us/microsoft-edge/location-and-privacy-in-microsoft-edge-31b5d154-0b1b-90ef-e389-7c7d4ffe7b04">https://support.microsoft.com/en-us/microsoft-edge/location-and-privacy-in-microsoft-edge-31b5d154-0b1b-90ef-e389-7c7d4ffe7b04</a>
    </li>
</ul>
