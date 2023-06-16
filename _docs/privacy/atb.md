---
title: How does DuckDuckGo improve its products while keeping your search and browsing history anonymous?
nav_title: About improving.duckduckgo.com
description: DuckDuckGo doesn’t track you. That’s the DuckDuckGo privacy policy in a nutshell.
category: DuckDuckGo Search Privacy
order: 500
---

At DuckDuckGo, we don't track you, ever. That's our privacy policy in a nutshell. To improve our product we develop completely anonymous ways to figure out how it is being used.  For example, all requests to [improving.duckduckgo.com](https://improving.duckduckgo.com/) cannot be associated with any individual. We do not create unique cookies and, more generally, we architect our product and these systems so that we do not even have the ability to create a search or browsing history for any individual &mdash; it's privacy by design. We created this page to explain how we improve our product.

First, you might notice that when you search DuckDuckGo, there may be an "`&atb=`" URL parameter in the web address at the top of your browser. This parameter allows us to anonymously A/B (split) test product changes we make to DuckDuckGo. For example, users in the A group would get blue links and users in the B group would get red links, and we'd be able to measure how usage of DuckDuckGo is impacted by different color links. For some experiments, we may need to ensure a consistent user experience across additional pages after you interact with a page element. In those cases, we may store non-personal data using [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) (e.g., the large and generalized user experience group you're in), but only after your first interaction, only on your device, and never by default.

Second, we measure engagement of specific events on the page (e.g., when a misspelling message is displayed, and when it is clicked). This allows us to run experiments where we can test different misspelling messages and use CTR (click through rate) to determine the message's efficacy. If you are looking at network requests, these are the ones going to the one-pixel image at `improving.duckduckgo.com`. These requests are anonymous and the information is used only by us to improve our products. We also occasionally work with browsers to similarly run completely anonymous experiments in order to improve the DuckDuckGo Private Search experience within that browser.

Third, you may notice similar `atb.js` or `exti` requests made by our browser extensions and mobile apps. These requests help us anonymously count how many devices are using an experience. For example, our browser extensions and mobile apps will send an atb.js request with each search made. These requests allow us to count approximately how many devices accessed DuckDuckGo without knowing anything about those devices or the exact searches they made.

Fourth, for certain elements in our search pages you may notice the `&vis` parameter being used in requests. This parameter allows us to measure usefulness by identifying which elements were actually visible on a page or received an interaction like hovering. Because of different screen sizes, visibility can be very different across devices (e.g., desktop vs. mobile vs. tablet). As users click on these elements, we use this interaction data to measure conversions effectively. The parameter values are anonymous, grouped together in batches, and are devoid of any personally identifiable information.

Fifth, while searching on DuckDuckGo, you may see `&perf_id` and `&parent_perf_id` parameters being used in certain network requests. These parameters allow us to measure the performance of essential components of a search engine, including performance of database and cache calls, fraud detection and rate limit functions, as well as return time and results processing upstream calls within queries. We use this data to help identify opportunities to improve the search experience, for example, to identify how we can deliver high-quality answers faster. The parameter values are randomly generated per search and are not associated with users, user agents, or IP addresses.

All of these requests are fully encrypted in transit to DuckDuckGo, so that nobody else but us can see them. And like with all other requests to DuckDuckGo, there is no personally identifiable information embedded in them, and we do not store IP addresses associated with them.

To be clear, this means **we cannot ever tell what individual people are doing since everyone is anonymous**, and that is a limit of our statistical methods since we are private by design. We can, however, within this anonymous limitation, reliably determine what changes are generally working, using these anonymous methods.

We have developed these systems from scratch, instead of using third-party services, because of our privacy promise not to track you. We're proud to be able to improve our site for you in a completely anonymous way!

If you have any concerns, please feel free to <a href="{{ site.baseurl }}/company/contact-us/">contact us</a>.
