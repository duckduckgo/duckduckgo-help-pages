---
title: How does DuckDuckGo improve its products while keeping search and browsing history anonymous?
nav_title: About improving.duckduckgo.com
description: How does DuckDuckGo improve its products while keeping search and browsing history anonymous?
category: Search Privacy
order: 500
---

At DuckDuckGo, we don't track you, ever. That's our [Privacy Policy](https://duckduckgo.com/privacy) in a nutshell. To improve our product, we develop completely anonymous ways to figure out how our products are being used. For example, all requests to [improving.duckduckgo.com](https://improving.duckduckgo.com/) cannot be associated with any individual. We do not create unique cookies and, more generally, we architect our product and these systems so that we do not even have the ability to create a search or browsing history for any individual &mdash; it's privacy by design. We created this page to explain, in detail, how we improve our product.

## How We Anonymously Test Product Changes

First, you might notice that when you search DuckDuckGo, there may be an `&atb=` parameter in the URL in your browser address bar. This parameter allows us to anonymously A/B (split) test product changes we make to DuckDuckGo. For example, if users in group A get blue links and users in group B get red links, this lets us measure how usage of DuckDuckGo is impacted by link color. For some product tests, we may need to ensure a consistent user experience across page loads or after interactions with an element on the page. In those cases, we may store non-personal data using [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) (e.g., the large and generalized user experience group you're in). But that information is only ever stored on your device and is removed after the test is complete.

Second, we measure engagement of specific events on the page. For example, measuring when a misspelling message is displayed and clicked on our search results page allows us to test different misspelling messages and determine which one is helpful. If you're looking at network requests, these are the ones going to the one-pixel image at `improving.duckduckgo.com` and may include a `&exp_[experiment_name]=` parameter to allow us to compare the engagement of different groups in the A/B test. These requests are anonymous, and the information is only used by us to improve our products. We also occasionally work with other browsers to run similar completely anonymous tests to improve the DuckDuckGo Private Search experience within that browser.

## How We Anonymously Estimate How Many People Use DuckDuckGo

You may notice similar `atb.js` or `exti` requests made by DuckDuckGo browser extensions and mobile apps. These requests help us anonymously count how many devices are using an experience. For example, our browser extensions and mobile apps will send an atb.js request with each search made. These requests allow us to count approximately how many devices accessed DuckDuckGo without knowing anything about those devices or the exact searches they made.

Similarly, while using the DuckDuckGo browser on mobile and desktop, you may see network requests containing `m_retention_segments`, along with anonymous parameters related to when the browser was used. This gives us a more nuanced understanding of how people use our products over time (for example, how many people use our apps daily vs. monthly) without relying on IP addresses or other unique identifiers. Knowing how many users stick around or stop using our products helps us identify opportunities to improve the user experience and measure whether certain product improvements help users.

If you’re using the DuckDuckGo app on Android version 11 or newer, you may notice a new folder in the Downloads directory named "DuckDuckGo." Currently, we don’t store anything in the “DuckDuckGo” folder, though we might in the future. For example we might use the “DuckDuckGo” folder as the default location for files you download online using our browser. Right now, this folder just helps us estimate how many people are trying DuckDuckGo for the first time in a totally anonymous way — we simply check to see if the folder exists already, which means our browser has likely been used on that Android device before. Because hundreds of thousands of people install our Android app every day, it’s impossible for us or anyone else to use this folder to identify you or connect your behavior in the DuckDuckGo app to you personally. The “DuckDuckGo” folder is only created once per install, and you can delete it at any time.

## How We Anonymously Measure Search Performance

While searching on DuckDuckGo, you may see `&perf_id` and `&parent_perf_id` parameters in certain network requests. These parameters allow us to measure the performance of essential components of a search engine, including performance of database and cache calls, fraud detection and rate limit functions, as well as return time and results processing upstream calls within queries. We use this data to help identify opportunities to improve the search experience, for example, to identify how we can deliver high-quality answers faster. The parameter values are randomly generated per search and are not associated with users, user agents, or IP addresses.

## How We Anonymously Measure Search Engagement

For certain elements in our search pages, you may notice the `&vis` parameter being used in requests. This parameter allows us to measure usefulness by identifying which elements were actually visible on a page or received an interaction like hovering. Because of different screen sizes, visibility can be very different across devices (e.g., desktop vs. mobile vs. tablet). As users click on these elements, we use this interaction data to measure conversions. The parameter values are anonymous, grouped together in batches, and are devoid of any personally identifiable information.

To monitor the success of certain features, we may count the number of requests for design elements hosted on `metrics-content.duckduckgo.com` -- for example, a particular type of button illustration. This domain and process only counts the number of times these elements were loaded; in other words, it is a privacy-respecting proxy that does not capture any identifying information.

## We Don’t Track You: It’s All Privacy by Design

None of the above types of requests have personally identifiable information embedded in them, and we do not store any IP addresses associated with them. This is the case with all other requests to DuckDuckGo. And all these types of requests are fully encrypted in transit to DuckDuckGo so that nobody else can see them.

To be clear, this means **we cannot ever tell what individual people are doing, since everyone is anonymous**. That is the limit of our statistical methods, since we are private by design. With these anonymous processes, however, we can still reliably determine what changes are generally working.

We have developed these systems from scratch, instead of using third-party services, because of our privacy promise not to track you. We’re proud to be able to improve our site for you in a completely anonymous way!

If you have any concerns, please feel free to <a href="{{ site.baseurl }}/company/contact-us/">contact us</a>.
