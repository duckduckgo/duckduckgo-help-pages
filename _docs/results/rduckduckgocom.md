---
title: What does the ‘r.duckduckgo.com’ domain do?
nav_title: About the ‘r.duckduckgo.com’ Domain
description: DuckDuckGo doesn’t track you. That’s the DuckDuckGo privacy policy in a nutshell.
category: Search Privacy
order: 700
---

When you click on a link in our results page, your search terms are not sent to the site that you click on, which can be the case on other search engines due to something called [HTTP "referers"](https://wikipedia.org/wiki/Http_referer).

On modern browsers we accomplish this by adding a small piece of code to our page called [Meta referrer](https://w3c.github.io/webappsec-referrer-policy/). Some browsers (especially older ones) do not support this standard, however. For those browsers, and also in situations where meta referrer doesn't work, we send the request back to our servers to remove search terms. This redirect goes through r.duckduckgo.com.

You can disable this privacy feature. To do that, go to [the settings page](https://duckduckgo.com/settings#privacy), select _Privacy_, and change the option _Redirect_ to _Off_.

You also go through a duckduckgo.com redirect when you use a bang. That's simply because we need to know where to send you.

Once you land on another site, though, you are subject to that site's privacy policy, as we have no control over the tracking that occurs outside of our domains. If you're interested in end-to-end anonymous browsing, check out the [Tor browser](https://www.torproject.org/), which will help you maintain your anonymity while on other sites.
