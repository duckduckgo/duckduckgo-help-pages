---
title: How does DuckDuckGo measure downloads without tracking me?
nav_title: Measuring Downloads Anonymously
description: DuckDuckGo doesn’t track you. That’s the DuckDuckGo Privacy Policy in a nutshell.
category: Web Browsing Privacy
order: 150
---

At DuckDuckGo, we don’t track you, ever. That’s our Privacy Policy in a nutshell. To improve our products, we develop completely anonymous ways to understand how people discover them.

You might notice that some download links for our browsers and browser extensions include a `source=` or an `origin=` URL parameter in the web address. These parameters allow us to anonymously see where a browser download originated by assigning a string of text to indicate the download source. For example, the parameter might indicate that the download happened from a button on our homepage or from a specific paid ad campaign. These strings are anonymous as they are not unique to individuals and are also not associated with any individual identifiers, for example IP address.

Most of the time we use `origin=` to count each download and then discard it immediately. To understand retention, we use `source=` instead, which will be anonymously sent by the browser along with the `atb=` parameter for twenty-eight days, after which it's discarded.

You can find out more about how we use the `atb=` parameter in [this help page]({{ site.baseurl }}/privacy/atb/).
