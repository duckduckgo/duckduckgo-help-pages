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

To do this, DuckDuckGo Search simply guesses your location using a [GEO::IP](https://en.wikipedia.org/wiki/Internet_geolocation) lookup with the IP address that's automatically sent to us via your device; then we throw away both the guessed location and the IP address, per our [Privacy Policy](https://duckduckgo.com/privacy), saving none of that info on our servers. Our default search experience was designed so that we don’t need to request any additional information than what you are already sending.

This process isn’t always accurate enough; for example, DuckDuckGo Search may end up assuming you’re hundreds of miles away from where you actually are, especially on mobile phone networks that route traffic through a central hub. That’s why we built an option that lets you improve the accuracy of your local search results.

<img alt="screenshot of warning screen" src="{{ site.baseurl }}/images/desktop_pul_prompt.png" />

When you see a prompt like the one above, "Use Location" will let you share your browser location to improve the accuracy of results while still hiding your precise location from DuckDuckGo.

Major web browsers have access to more accurate location information using a variety of techniques, including Wi-Fi databases, cell tower location databases, and GPS. When you see one of these standard browser prompts, you are being asked whether your browser can obtain this more accurate location for use by the webpage indicated. In our case, we engineered a solution to shield that more accurate location from us.

<img alt="screenshot of browser location prompt" src="{{ site.baseurl }}/images/desktop_location_prompt.png" />

The location returned by your browser is stored locally on your device. The next time you perform a local search, selecting “Use Location” will send us a random location nearby, while hiding your actual location from DuckDuckGo. We use that random location to generate your results, then throw it away.

If available on your device, enabling Precise Location in your app permissions will yield the most accurate local results. If you’d rather choose a custom location instead, you can pick “Set Location on Map” instead of “Use Location.” This bypasses the browser location permission, but still keeps your precise location anonymous to us.

The only time we’ll use your exact location during a search, rather than a randomized location nearby, is to ensure accuracy when you request map directions. In this case, the information is only used to generate your directions and is not saved on DuckDuckGo's servers.

**To be clear, this means that even if you opt-in to using a more accurate location, your searches will still be anonymous.**

### Learn more about your browser’s location services

As mentioned above, browsers use a variety of techniques browsers use to identify an accurate location, which may present their own privacy implications. These vary by browser and depend in part on the location service the browser uses. Most major browsers provide detailed information on the location service they use and its associated policies:

-   Firefox (uses Google Location Services): [https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites](https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites)
-   Chrome (uses Google Location Services): [https://policies.google.com/technologies/location-data?hl=en-US#how-find](https://policies.google.com/technologies/location-data?hl=en-US#how-find)
-   Safari (uses Apple Location Services): [https://support.apple.com/en-us/HT204690](https://support.apple.com/en-us/HT204690)
-   Edge (uses Windows Location Services): [https://support.microsoft.com/en-us/microsoft-edge/location-and-privacy-in-microsoft-edge-31b5d154-0b1b-90ef-e389-7c7d4ffe7b04](https://support.microsoft.com/en-us/microsoft-edge/location-and-privacy-in-microsoft-edge-31b5d154-0b1b-90ef-e389-7c7d4ffe7b04)
