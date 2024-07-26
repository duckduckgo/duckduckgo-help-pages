---
title: How DuckDuckGo Keeps Your Local Search Results Anonymous
nav_title: How We Keep Local Results Anonymous
description: DuckDuckGo doesn’t track you. That’s the DuckDuckGo privacy policy in a nutshell.
image: /images/searches-anon.png
category: Search Privacy
order: 200
---

At DuckDuckGo, we don’t track you, ever. That’s our [Privacy Policy](https://duckduckgo.com/privacy) in a nutshell. For example, we do not create unique cookies and architect our product so that we do not even have the ability to create a search or browsing history for any individual — it’s privacy by design.

There may be cases when you want more accurate location-based results like local weather and restaurants. We can still serve results for searches like these (including instant answers and ads) while keeping you anonymous.

To do this, DuckDuckGo Search simply guesses your location using a [GEO::IP](https://en.wikipedia.org/wiki/Internet_geolocation) lookup with the IP address that's automatically sent to us via your device; then we throw away both the guessed location and the IP address, per our [privacy policy](https://duckduckgo.com/privacy), saving none of that info on our servers. Our default search experience was designed so that we don’t need to request any additional information than what you are already sending.

This process isn’t always accurate enough, for example DuckDuckGo Search may end up assuming you’re hundreds of miles away from where you actually are, especially on mobile phone networks that route traffic through a central hub. That’s why we built an option that lets you improve the accuracy of your local search results.

<img alt="screenshot of warning screen" src="{{ site.baseurl }}/images/desktop_pul_prompt.png" />

Major web browsers have access to more accurate location information using a variety of techniques, including WiFi databases, cell tower location databases, and GPS. When you see one of these standard browser prompts, you are allowing your browser to obtain this more accurate location for use by the requesting webpage. In our case, we engineered a solution to shield that more accurate location from us.

If you'd rather choose a custom location, you can pick "Set Location on Map" instead of "Use Location." This bypasses the browser location permission, but still keeps your precise location anonymous to us.

<img alt="screenshot of browser location prompt" src="{{ site.baseurl }}/images/6631305e26ef2563263b3eb1c83b2a9e.png" />

The location returned by the browser is stored locally on your device and is never sent to DuckDuckGo servers. After selecting “Use Location” or “Set Location on Map”, the next time you perform a local search, code that runs locally in your browser will send us a random location nearby, while hiding your actual location from DuckDuckGo. We use that random location to generate your results, then throw it away.

**To be clear, this means that even if you opt-in to using a more accurate location, your searches will still be anonymous and DuckDuckGo never sees your actual location.**

### How Directions Work

When you look up directions on DuckDuckGo Search (for example “drive from NYC to Niagra Falls”), you may see an Instant Answer like the one below in search results.

<img alt="screenshot of directions on a map" src="{{ site.baseurl }}/images/how-directions-work.png" />

### Learn more about your browser’s location services

As mentioned above browsers use a variety of techniques browsers use to identify an accurate location, which may present their own privacy implications. These vary by browser and depend in part on the location service the browser uses. Most major browsers provide detailed information on the location service they use and its associated policies:

-   Firefox (uses Google Location Services): [https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites](https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites)
-   Chrome (uses Google Location Services): [https://policies.google.com/technologies/location-data?hl=en-US#how-find](https://policies.google.com/technologies/location-data?hl=en-US#how-find)
-   Safari (uses Apple Location Services): [https://support.apple.com/en-us/HT204690](https://support.apple.com/en-us/HT204690)
-   Edge (uses Windows Location Services): [https://support.microsoft.com/en-us/microsoft-edge/location-and-privacy-in-microsoft-edge-31b5d154-0b1b-90ef-e389-7c7d4ffe7b04](https://support.microsoft.com/en-us/microsoft-edge/location-and-privacy-in-microsoft-edge-31b5d154-0b1b-90ef-e389-7c7d4ffe7b04)
