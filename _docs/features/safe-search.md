---
title: How To Use the Safe Search Setting To Adjust Adult Content in DuckDuckGo Search Results
nav_title: Safe Search
description: Learn how to use advanced filtering features on DuckDuckGo Private Search to get the search results you want.
category: Search Results
order: 600
---

Safe search lets you remove adult content from results on DuckDuckGo. You can easily control it in the following ways:

-   With the dropdown box under the search box in our results pages (see screenshot below).
-   With the "Safe Search" option in the [DuckDuckGo settings page](https://duckduckgo.com/settings).
-   By appending !safeoff to your search (this uses our [bang](https://duckduckgo.com/bang) syntax).
-   By using [safe.duckduckgo.com](https://safe.duckduckgo.com) instead. Searches from safe.duckduckgo.com always have safe search set to "strict".

<img alt="Screenshot showing safe search option below the search box." src="{{ site.baseurl }}/images/safe-search.png" />

For more technical users, if you want to force safe search on (or off) you could use our URL parameters and automatically append `&amp;kp=1` (strict), `&amp;kp=-1` (moderate - don't show explicit results), or `&amp;kp=-2` (off) to all duckduckgo.com pages.

We try hard to respect your safe search preference, but sometimes content does get through that is not appropriately restricted. If you notice this happening, we'd appreciate you letting us know via the "Send feedback" button on the right-hand side of our search results (on desktop), and we'll do our best to resolve it in a timely fashion.

### Force Safe Search at a Network Level

For network administrators, you can force strict safe search for everyone on your network by mapping duckduckgo.com to safe.duckduckgo.com. Mapping to safe.duckduckgo.com will guarantee that safe search is enabled for al DuckDuckGo queries on the network, and that client safe search controls are disabled.

To force safe search you will need to make a change to your DNS configuration. Set the DNS entry for duckduckgo.com to the safe.duckduckgo.com CNAME.
