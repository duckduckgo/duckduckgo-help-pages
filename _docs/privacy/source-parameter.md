---
title: How does DuckDuckGo measure downloads without tracking me?
nav_title: Measuring Downloads Anonymously
description: DuckDuckGo doesn’t track you. That’s the DuckDuckGo Privacy Policy in a nutshell.
category: Web Browsing Privacy
order: 150
---

At DuckDuckGo, we don’t track you, ever. That’s our Privacy Policy in a nutshell. To improve our product, we develop completely anonymous ways to figure out how people find our products and learn how they’re being used.

You might notice that some download links for our browsers and browser extensions include a `source=` or an `origin=` URL parameter in the web address. These parameters allow us to anonymously see where a browser download originated by assigning a unique string of text to specific download sources. For example, the parameter might indicate that the download happened from a button on our homepage or from a specific paid ad campaign.

Most of the time we use `origin=` to measure conversion and discard it immediately after install. If we need to get an idea of retention, we'll use `source=` instead. This will be retained by the browser for 28 days after install before being discarded. This anonymous source value is sent to DuckDuckGo when the app is used and when a search is performed. We never send anything that has potentially identifiable information alongside the source value, like user IDs or search queries.

We use this data to anonymously understand the relative conversion and retention rates of people who find and use DuckDuckGo in specific ways.
