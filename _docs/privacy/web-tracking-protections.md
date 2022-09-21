---
title: Web Tracking Protections
category: Privacy
order: 72
---

DuckDuckGo [never tracks you][no-tracking]. And when you leave our search engine and use our apps or extensions to browse other sites, we aim to protect your privacy as much as possible. To be effective, browser tracking protection needs to continually evolve to mitigate how trackers attempt to evade specific protections. That’s why we offer multiple types of web tracking protections. Other browsers offer some of these by default, like cookie and fingerprinting protections, but we also provide many other protections that most browsers do not offer by default, like [3rd-Party Tracker Loading Protection][3rd-party-tracker-loading-protection], [Global Privacy Control][global-privacy-control-gpc], [Link Tracking Protection][link-tracking-protection], [CNAME Cloaking Protection][cname-cloaking-protection], [Google AMP Protection][google-amp-protection], and more, which all help cover different tracking angles.

For example, most browsers’ default tracking protection focuses on cookie and fingerprinting protections that only restrict trackers after they load in your browser. Unfortunately, that level of protection leaves information like your IP address and other identifiers sent with loading requests vulnerable to profiling. We offer our [3rd-Party Tracker Loading Protection][3rd-party-tracker-loading-protection] to help address this vulnerability, which stops most 3rd-party trackers from loading in the first place, providing significantly more protection.

We created this page to explain how each of our web tracking protections works, how our protections work across supported platforms, and how they work together to provide overlapping protection. Our non-beta apps and extensions are also [open source][github-duckduckgo], which means that anyone can examine their source code and how our web tracking protections are coded. To identify trackers, we crawl the web with our [Tracker Radar][post-tracker-radar], which is also [open source][github-tracker-radar], as is our [list of trackers][github-list-of-trackers]. While no one can eliminate _all_ hidden tracking or _all_ profiling online, we aim to prevent most 3rd-party tracking through the overlapping protections described on this page.

* TOC
{:toc}


## 3rd-Party Tracker Loading Protection

When you visit a website, the web address (URL) in your browser’s address bar tells your browser where to go. What you may not realize, is that sites also try to load other URLs in the background while your destination page is loading. Many of those URLs come from other companies, commonly referred to as “3rd parties.”

Sites often embed these 3rd-party requests to support site functionality, but they can also be used to track you. We crawl the web with [Tracker Radar][post-tracker-radar] to identify tracking requests and maintain our own [list of trackers][github-list-of-trackers]. For example, the most prevalent 3rd-party tracker on the Internet is Google Analytics. Requests to Google Analytics URLs are embedded [on millions of sites][analytics-usage-distribution] to help the owners understand how their sites are being used. But typically, Google [can also use this][google-analytics-data-sharing] to profile you outside of the site where the information originated.

Most browsers that offer web tracking protections are usually talking about cookie tracking protections (described in [3rd-party][3rd-party-cookie-protection] and [1st-party][1st-party-cookie-protection] cookie protection). However, these types of protections can only restrict 3rd-party trackers after they load in your browser, and these 3rd parties still get access to information that could be used to track you across sites as part of the loading process (like IP address or other identifiers sent with the loading request). To protect against this tracking, you need a web tracking protection that actually stops most 3rd-party tracking requests from loading in the first place. This type of protection comes built-in with all our apps and extensions, and goes well beyond the web tracking protections most popular browsers offer by default.

This protection is particularly difficult to provide without causing usability issues because some websites depend on code that loads from these embedded requests. We can sometimes work around this with [Surrogates][surrogates]. In other cases, we may make a limited exception when it would prevent you from signing in to a site or to preserve essential usability. It’s also important to note that the intention of 3rd-Party Tracker Loading Protection is not to stop all 3rd-party requests from loading, just those used for 3rd-party tracking.

Previously, we were limited in how we could apply our 3rd-Party Tracker Loading Protection on Microsoft tracking scripts due to a policy requirement related to our use of Bing as a source for our private search results. This is no longer the case and we are now starting to block Microsoft scripts from loading on 3rd-party websites in our browsing apps (iOS and Android) and in our browser extensions (Chrome, Firefox, Safari, Edge and Opera). This update to 3rd-Party Tracker Loading Protection should be completed on all non-beta platforms by August 12th, 2022, with beta apps to follow by September 1st, 2022.

Currently, if an advertiser wants to detect conversions for their own ads that are shown on DuckDuckGo via the `bat.bing.com` domain, [3rd-Party Tracker Loading Protection][3rd-party-tracker-loading-protection] will not block `bat.bing.com` requests from loading on the advertiser’s website following [DuckDuckGo ad clicks][ads-by-microsoft-on-duckduckgo-private-search], but these requests are blocked in all other contexts. This is because DuckDuckGo private search advertising is in partnership with Microsoft and some advertisers use this domain for conversion measurement. For anyone who wants to avoid this, it’s possible to disable ads in DuckDuckGo search settings. To eventually replace the reliance on `bat.bing.com` for evaluating ad effectiveness, we’ve started working on an architecture for private ad conversions that can be externally validated as non-profiling. [Read more on our blog][post-private-ad-conversions].

| Platform | Support |
|---|---|
| Firefox extension | 3rd-party scripts on our list blocked from loading. |
| Chrome extension | 3rd-party scripts on our list blocked from loading. |
| Edge extension | 3rd-party scripts on our list blocked from loading. |
| Opera extension | 3rd-party scripts on our list blocked from loading. |
| Safari extension | 3rd-party scripts on our list blocked from loading. |
| iPhone & iPad app | 3rd-party scripts on our list blocked from loading. |
| Android app | 3rd-party scripts on our list blocked from loading. |
| Mac app | 3rd-party scripts on our list blocked from loading. |


## 3rd-Party Cookie Protection

Believe it or not, web “cookies” were originally designed to be a helpful data storage mechanism. However, 3rd-party cookies have become one of the most common methods of web tracking.

If you notice the same ads following you around, 3rd-party cookies may be to blame because they can easily track you as you browse from site to site. That’s because even though third-party cookies are created on one site, they can be retrieved from another. For example, if you visit a website which uses Google’s ad network, it can create a 3rd-party cookie based on the content you are viewing. Then, when you visit another website that also uses Google ads, Google can read the initial cookie, know that you’re the same person, and show you an ad based on what you were viewing on the previous site.

To protect against this, we first block most 3rd-party tracking requests with [3rd-Party Tracker Loading Protection][3rd-party-tracker-loading-protection], which stops requests from loading that would otherwise have a chance to create or access 3rd-party cookies. In addition, we also automatically block 3rd-party cookies on our list of known trackers by default, and will only make a limited exception when it would prevent you from signing in to a site or to preserve essential usability.

| Platform | Support |
|---|---|
| Firefox extension | 3rd-party scripts on our list blocked from setting or accessing 3rd-party cookies. |
| Chrome extension | 3rd-party scripts on our list blocked from setting or accessing 3rd-party cookies. |
| Edge extension | 3rd-party scripts on our list blocked from setting or accessing 3rd-party cookies. |
| Opera extension | 3rd-party scripts on our list blocked from setting or accessing 3rd-party cookies. |
| Safari extension | 3rd-party scripts on our list blocked from creating or accessing 3rd-party cookies, and 3rd-party cookies also blocked through WebKit’s [built-in cookie tracking protection][webkit-cookie-tracking-protection]. |
| iPhone & iPad app | 3rd-party scripts on our list blocked from creating or accessing 3rd-party cookies, and 3rd-party cookies also blocked through WebKit’s [built-in cookie tracking protection][webkit-cookie-tracking-protection]. |
| Android app | 3rd-party scripts on our list blocked from creating or accessing 3rd-party cookies. All 3rd-party cookies also blocked through the [Android WebView API][android-webview-api], except when a [Google Single-Sign On (SSO)][github-google-sso] is in progress. |
| Mac app | 3rd-party scripts on our list blocked from creating or accessing 3rd-party cookies, and 3rd-party cookies also blocked through WebKit’s [built-in cookie tracking protection][webkit-cookie-tracking-protection]. |


## 1st-Party Cookie Protection

Unlike 3rd-party cookies, 1st-party cookies are less likely to be involved in cross-site tracking because they can only be retrieved from the site where they were originally created. However, 1st-party cookies can still be used to re-identify you when you later return to a website. This can be helpful when used to recognize that you’re still signed in, but 1st-party cookies can also be used to monitor your activity on sites over time and facilitate cross-site tracking. That’s because identifiers stored in 1st-party cookies can be sent to 3rd-party companies when their requests are directly embedded in the content of a website.

To protect against this, we first block most embedded 3rd-party tracking requests before they even have a chance to create or access 1st-party cookies, because we stop those requests from loading with [3rd-Party Tracker Loading Protection][3rd-party-tracker-loading-protection]. We also do the same for many 3rd-party requests that are disguised as 1st parties with [CNAME Cloaking Protection][cname-cloaking-protection]. In addition, by default we automatically set a 7-day expiration for 1st-party cookies created by scripts, and will only make a limited exception when it would prevent you from signing in to a site or to preserve essential usability.

| Platform | Support |
|---|---|
| Firefox extension | 3rd-party scripts on our list blocked from creating or accessing 1st-party cookies, including those impersonating 1st parties on our CNAME list. Automatic 7-day expiry enforced for all 1st-party cookies created by scripts. |
| Chrome extension | 3rd-party scripts on our list blocked from creating or accessing 1st-party cookies, including those impersonating 1st parties on our CNAME list. Automatic 7-day expiry enforced for all 1st-party cookies created by scripts. |
| Edge extension | 3rd-party scripts on our list blocked from creating or accessing 1st-party cookies, including those impersonating 1st parties on our CNAME list. Automatic 7-day expiry enforced for all 1st-party cookies created by scripts. |
| Opera extension | 3rd-party scripts on our list blocked from creating or accessing 1st-party cookies, including those impersonating 1st parties on our CNAME list. Automatic 7-day expiry enforced for all 1st-party cookies created by scripts. |
| Safari extension | 3rd-party scripts on our list blocked from creating or accessing 1st-party cookies. Automatic 24-hour or 7-day expiry enforced for all 1st-party cookies through [WebKit’s built-in cookie tracking protection][webkit-cookie-tracking-protection]. Blocking scripts impersonating 1st parties unsupported due to limitations of the current [App Extensions][safari-app-extensions] architecture, but on our product roadmap to adopt the [Web Extensions][safari-web-extensions] architecture and add [CNAME Cloaking Protection][cname-cloaking-protection]. |
| iPhone & iPad app | 3rd-party scripts on our list blocked from creating or accessing 1st-party cookies, including a subset of those impersonating 1st parties on our CNAME list. Automatic 24-hour or 7-day expiry enforced for all 1st-party cookies through WebKit’s [built-in cookie tracking protection][webkit-cookie-tracking-protection]. |
| Android app | 3rd-party scripts on our list blocked from creating or accessing 1st-party cookies. Automatic expiration of 1st-party cookies unsupported due to platform limitations, but on our product roadmap to apply workarounds. Blocking scripts impersonating 1st parties unsupported, but on our product roadmap to add [CNAME Cloaking Protection][cname-cloaking-protection]. |
| Mac app | 3rd-party scripts on our list blocked from creating or accessing 1st-party cookies, including a subset of those impersonating 1st parties on our CNAME list. Automatic 24-hour or 7-day expiry enforced for all 1st-party cookies through WebKit’s [built-in cookie tracking protection][webkit-cookie-tracking-protection]. |


## CNAME Cloaking Protection

Some 3rd-party trackers disguise their real (origin) domains as subdomains of the website they’re hiding on, so they appear to belong to the website owner (1st party). This can help them escape common 3rd-party tracking protections. For example, `metrics.example.com` looks like it belongs to the `example.com` website owner, but the `metrics.example.com` subdomain may actually have a 3rd-party tracking company behind it.

We identify 3rd-party domains trying to track you in this way through our open source [Tracker Radar][github-tracker-radar] crawl. We then help protect against CNAME cloaking by treating those domains as proper 3rd parties, such that we can then apply [3rd-Party Tracker Loading Protection][3rd-party-tracker-loading-protection] and other web tracking protections. This type of protection is not offered in most popular browsers by default.

| Platform | Support |
|---|---|
| Firefox extension | Treats 1st-party requests on our CNAME list as 3rd parties. |
| Chrome extension | Treats 1st-party requests on our CNAME list as 3rd parties. |
| Edge extension | Treats 1st-party requests on our CNAME list as 3rd parties. |
| Opera extension | Treats 1st-party requests on our CNAME list as 3rd parties. |
| Safari extension | Unsupported, but on our product roadmap. |
| iPhone & iPad app | Treats 1st-party requests on a subset of our CNAME list as 3rd parties. On our product roadmap to address usability issues limiting domain coverage. |
| Android app | Treats 1st-party requests on our CNAME list as 3rd parties. |
| Mac app | Treats 1st-party requests on a subset of our CNAME list as 3rd parties. On our product roadmap to address usability issues limiting domain coverage. |


## Fingerprinting Protection

Some companies try to combine specific information about your browser (like your user agent) and device information (like your device screen size) to create a unique identifier for you that can let them follow you around the web. This widespread tracking technique is known as “fingerprinting” or “device fingerprinting” and is one way tracking companies try to get around cookie tracking protections. They do this by running JavaScript code and using browser APIs to ask the browser to reveal and return information about itself and the device it’s running on (for example, screen size and CPU type).

To protect against this, we block many fingerprinting scripts before they can even load with our [3rd-Party Tracker Loading Protection][3rd-party-tracker-loading-protection]. In addition, we override many of the browser APIs used for fingerprinting to make them return either no information or alternative information that’s less useful for fingerprinting. We will only make a limited exception when it would prevent you from signing in to a site or to preserve essential usability. You can review [our open source code][github-fingerprint-protection] for this feature.

| Platform | Support |
|---|---|
| Firefox extension | Fingerprinting scripts from 3rd-party trackers on our list blocked from loading. Browser APIs on our list overridden. |
| Chrome extension | Fingerprinting scripts from 3rd-party trackers on our list blocked from loading. Browser APIs on our list overridden. |
| Edge extension | Fingerprinting scripts from 3rd-party trackers on our list blocked from loading. Browser APIs on our list overridden. |
| Opera extension | Fingerprinting scripts from 3rd-party trackers on our list blocked from loading. Browser APIs on our list overridden. |
| Safari extension | Fingerprinting scripts from 3rd-party trackers on our list blocked from loading. Browser APIs overridden through WebKit’s [built-in fingerprinting protection][webkit-fingerprinting-protection]. Additional fingerprinting protections unsupported due to limitations of the current [App Extensions][safari-app-extensions] architecture, but on our product roadmap to adopt the [Web Extensions][safari-web-extensions] architecture and expand this protection. |
| iPhone & iPad app | Fingerprinting scripts from 3rd-party trackers on our list blocked from loading. Browser APIs overridden through WebKit’s [built-in fingerprinting protection][webkit-fingerprinting-protection]. We apply additional overrides to expand this protection. |
| Android app | Fingerprinting scripts from 3rd-party trackers on our list blocked from loading. Additional browser API overrides unsupported due to platform limitations, but additional overrides on our product roadmap. |
| Mac app | Fingerprinting scripts from 3rd-party trackers on our list blocked from loading. Browser APIs on our list overridden. |


## Smarter Encryption (HTTPS Upgrading)

If the web address you are visiting starts with `http://`, that means the Internet connection to the website is unencrypted, and everything you do or see on that website is vulnerable to network onlookers, including the specific page you are on and any information you submit about yourself while there. If the web address starts with `https://` (with an s at the end), the Internet connection is encrypted, and anyone trying to spy on you (like your Internet provider or Wi-Fi snoopers) can’t see anything beyond the website you’re going to.

To offer Smarter Encryption (automatic HTTPS upgrading), we crawl the web continuously, look for sites that fully support HTTPS across their entire website, and maintain a list of the sites we find within our apps and extensions. You can review the [open source code][github-smarter-encryption] for our crawler. If you try to navigate to one of these sites unencrypted (http), for example from a social media link, we automatically change to encrypted (https) for any site on our list.

Except for Safari, most popular browsers only direct users to encrypted versions of pages in specific circumstances, such as when you navigate directly to a page in the address bar. Otherwise, they only offer additional HTTPS upgrading functionality if you opt-in to advanced settings or use certain modes (like private browsing). By contrast, Smarter Encryption covers all clicks and interactions as you browse the web, including clicks from social media, search engines, and other websites.

| Platform | Support |
|---|---|
| Firefox extension | Upgrades our full list of domains. |
| Chrome extension | Upgrades our full list of domains. |
| Edge extension | Upgrades our full list of domains. |
| Opera extension | Upgrades our full list of domains. |
| Safari extension | Upgrades domains through WebKit’s [built-in automatic HTTPS upgrading][webkit-upgrading-protection]. |
| iPhone & iPad app | Upgrades a subset of our full list of domains that covers approximately 90% of search engine clicks. Platform limitations restrict us from upgrading additional requests loaded by websites (such as those used to load additional content). |
| Android app | Upgrades a subset of our full list of domains that covers approximately 90% of search engine clicks. Platform limitations restrict us from upgrading additional requests loaded by websites (such as those used to load additional content). |
| Mac app | Upgrades a subset of our full list of domains that covers approximately 90% of search engine clicks. Platform limitations restrict us from upgrading additional requests loaded by websites (such as those used to load additional content). |


## Link Tracking Protection

The links embedded in websites, social media, and emails that we share and click on every day often contain additional URL parameters after the destination domain. While many of these parameters aren’t used for tracking purposes, others are added to specifically track your behavior across sites (for example: `example.com/page.html?`**`fbclid=your_facebook_account_ID`**).

We help protect against this type of tracking by removing [many tracking parameters][github-tracking-parameters]. This type of protection is not offered in most popular browsers by default.

| Platform | Support |
|---|---|
| Firefox extension | Removes URL parameters on our list. |
| Chrome extension | Removes URL parameters on our list. |
| Edge extension | Removes URL parameters on our list. |
| Opera extension | Removes URL parameters on our list. |
| Safari extension | Unsupported due to limitations of the current [App Extensions][safari-app-extensions] architecture, but on our product roadmap to adopt the [Web Extensions][safari-web-extensions] architecture and add Link Tracking Protection. |
| iPhone & iPad app | Removes URL parameters on our list from the first navigation request. Applying protection to subsequent links in a series of automatic redirects unsupported due to platform limitations. |
| Android app | Removes URL parameters on our list. |
| Mac app | Removes URL parameters on our list from the first navigation request. Applying protection to subsequent links in a series of automatic redirects unsupported due to platform limitations. |


## Referrer Tracking Protection

When content loads in a web browser, the browser and any servers through which the request passes along the way use metadata in what’s called the “header” to determine what to do with the request. Part of this header is known as the “referrer,” which allows a server to identify the last place a user was before they arrived on that site. Sometimes this is used for security checks (like when you sign in to a website), but it can also be hijacked by companies to send along additional data that could help them track and fingerprint you.

By default, we “trim” (remove) some of the metadata in the “referrer header” that trackers could potentially use to track you individually. All 3rd-party requests are trimmed down to the hostname (for example, `info.test.com/path?query` becomes just `info.test.com`). For Firefox, Chrome, Edge, and Opera we further trim requests from the trackers on our list down to just the top-level domain (for example, `info.test.com/path?query` becomes simply `test.com`)

| Platform | Support |
|---|---|
| Firefox extension | Referrer headers in tracking requests on our list trimmed to top-level domain. |
| Chrome extension | Referrer headers in tracking requests on our list trimmed to top-level domain. |
| Edge extension | Referrer headers in tracking requests on our list trimmed to top-level domain. |
| Opera extension | Referrer headers in tracking requests on our list trimmed to top-level domain. |
| Safari extension | Referrer headers trimmed to the hostname for all requests originating from a different domain than the visited site through WebKit’s [built-in referrer tracking protection][webkit-referrer-tracking-protection]. Further Referrer Tracking Protections unsupported due to limitations of the current [App Extensions][safari-app-extensions] architecture, but on our product roadmap to adopt the [Web Extensions][safari-web-extensions] architecture and expand this protection. |
| iPhone & iPad app | Referrer headers trimmed to hostname for all requests originating from a different domain than the visited site through WebKit’s [built-in referrer tracking protection][webkit-referrer-tracking-protection]. Trimming referrer headers in tracking requests on our list unsupported, but on our product roadmap. |
| Android app | Unsupported, but on our product roadmap. |
| Mac app | Unsupported, but on our product roadmap. |


## Embedded Social Content Tracking Protection

When you visit a website that contains embedded content from social media companies (such as YouTube videos, Tweets, Facebook comments, or sign-in buttons), that content often includes tracking code that those companies use to link your user information (like IP address and browser details) with your browsing history.

By default, we block social media embedded content from Facebook on [our list of content types][social-ctp-config], which includes: sign-in buttons, videos, comments, posts, pages, and groups. We plan to expand this protection to additional social media content, including YouTube videos. You can easily unblock a particular piece of content to view it if desired. While social media companies will receive some user information each time you unblock a piece of content, this protection will help reduce what they know about you overall by default. You can learn more about [Embedded Social Content Tracking Protection][embedded-content-protection]. This type of protection is not offered in most popular browsers by default.

| Platform | Support |
|---|---|
| Firefox extension | Embedded Facebook content on our list of content types blocked. Additional social networks on our product roadmap. |
| Chrome extension | Embedded Facebook content on our list of content types blocked. Additional social networks on our product roadmap. |
| Edge extension | Embedded Facebook content on our list of content types blocked. Additional social networks on our product roadmap. |
| Opera extension | Embedded Facebook content on our list of content types blocked. Additional social networks on our product roadmap. |
| Safari extension | Unsupported due to limitations of the current [App Extensions][safari-app-extensions] architecture, but on our product roadmap to adopt the [Web Extensions][safari-web-extensions] architecture and add Embedded Social Content Tracking Protection. |
| iPhone & iPad app | Unsupported, but on our product roadmap. |
| Android app | Unsupported, but on our product roadmap. |
| Mac app | Embedded Facebook content on our list of content types blocked. Additional social networks on our product roadmap. |


## Google-Specific Web Tracking Protections


### Google AMP Protection

Google's Accelereated Mobile Pages (AMP) is [marketed][amp-about] as a way to “make it easy to build fast websites” by serving them from Google, but Google can also use AMP to track users who read those pages.

To help protect you against this form of Google tracking, we replace most Google AMP links when clicked with the original publisher’s website so publishers can directly serve you these pages, instead of Google.

To do this, we extract the original publisher link where possible by recognizing the format of AMP. Otherwise, we load the AMP link in the background, and [block all content from loading][github-block-amp-content], separate from your normal browsing experience. This allows us to extract the publisher link, delete all data from that background load and then load the publisher webpage, as normal. This helps protect you from the additional Google tracking that may not be present on the original webpage. This type of protection is not offered in most popular browsers by default.

| Platform | Support |
|---|---|
| Firefox extension | Google AMP links replaced wherever detected. |
| Chrome extension | Google AMP links replaced wherever detected. |
| Edge extension | Google AMP links replaced wherever detected. |
| Opera extension | Google AMP links replaced wherever detected. |
| Safari extension | Unsupported due to limitations of the current [App Extensions][safari-app-extensions] architecture, but on our product roadmap to adopt the [Web Extensions][safari-web-extensions] architecture and add Google AMP protection. |
| iPhone & iPad app | Google AMP links replaced wherever detected. |
| Android app | Google AMP links replaced wherever detected. |
| Mac app | Google AMP links replaced wherever detected. |


### Google Topics Protection

Google is attempting to replace 3rd-party cookies within their browser with an alternative tracking mechanism called [Topics][topics-fledge-announcement]. For Google Chrome users, Topics can use your Chrome browsing history to automatically infer your interests and align them with a predefined list of topics (for example, “Child Internet Safety” or “Personal Loans”). A subset of this list is shared with websites and other tracking companies so they can target you with ads just as easily — based on your behavior and without your knowledge.

The DuckDuckGo Chrome extension disables Topics from running in Google Chrome. You can [learn more about Google Topics Protection][post-topics-fledge-protection] and [review our open source code][github-topics-fledge-disable] for this feature.

| Platform | Support |
|---|---|
| Chrome extension | Google Topics disabled. |
| Others | Not applicable to other platforms. |


### Google FLEDGE Protection

Like Topics, Google [FLEDGE][fledge] is another Google mechanism meant to replace 3rd-party cookies. Its ultimate goal is also to “re-target” you with ads — in other words, letting Google ads [follow you from website to website][topics-fledge-announcement]. FLEDGE works directly in the Chrome browser and [uses your browsing history][fledge-browsing-history] to run ad auctions in order to re-target you better and without you realizing it.

The DuckDuckGo Chrome extension disables FLEDGE from running in Google Chrome. You can [learn more about Google FLEDGE Protection][post-topics-fledge-protection] and [review our open source code][github-topics-fledge-disable] for this feature.

| Platform | Support |
|---|---|
| Chrome extension | Google FLEDGE disabled. |
| Others | Not applicable to other platforms. |


## Preserving Usability

We aim to deliver privacy, simplified. Part of our ethos of simplicity is not breaking website functionality in the process of blocking and restricting trackers. We develop our protections with this mind, and we use the following techniques to further this effort as we continue to expand protections.


### Surrogates

Sometimes sites depend on code that loads from embedded 3rd-party tracking script requests in order to function properly. When our [3rd-Party Tracker Loading Protection][3rd-party-tracker-loading-protection] stops these from loading, it can cause sites to behave unexpectedly. However, we can sometimes create small pieces of code called “surrogates” that work around this tracker-dependent breakage so that we can still stop those trackers from loading.

A surrogate works locally on your device, pretending to be a particular 3rd-party tracking script without actually doing any tracking. Surrogates replicate the expected script’s API structure with all tracking components removed, including any remote server calls. This lets us neutralize the parts that would have tried to track you while allowing websites to load and function properly. You can [review our open source code][github-surrogates] for this feature. Surrogates are not offered in most popular browsers by default.

| Platform | Support |
|---|---|
| Firefox extension | Surrogates preserve privacy and usability for tracker-dependant breakage on our list. |
| Chrome extension | Surrogates preserve privacy and usability for tracker-dependant breakage on our list. |
| Edge extension | Surrogates preserve privacy and usability for tracker-dependant breakage on our list. |
| Opera extension | Surrogates preserve privacy and usability for tracker-dependant breakage on our list. |
| Safari extension | Unsupported, but on our product roadmap. |
| iPhone & iPad app | Surrogates preserve privacy and usability for tracker-dependant breakage on our list, but some usability issues may still occur due to platform limitations that cause 3rd-Party Tracker Loading Protection to block scripts before we have a chance to apply Surrogates. |
| Android app | Surrogates preserve privacy and usability for tracker-dependant breakage on our list. |
| Mac app | Surrogates preserve privacy and usability for tracker-dependant breakage on our list, but some usability issues may still occur due to platform limitations that cause 3rd-Party Tracker Loading Protection to block scripts before we have a chance to apply Surrogates. |


### Remotely Configured Exceptions

If you’re using our app or extension and suspect that a website usability issue was caused by one of the Web Tracking Protections detailed on this page, you can let us know by submitting a Broken Site Report. You can also temporarily disable DuckDuckGo’s Privacy Protection for individual websites to troubleshoot the issue you’re experiencing.

We review user-reported Broken Site Reports daily, and work to address these usability issues continuously. When one of our Web Tracking Protections causes issues to occur (for example, if users can’t sign in or can’t use a popular website), we may add that site domain to a temporary exclusion list for that protection. This preserves essential usability for all users as we work toward a better solution. All of our privacy apps and extensions rely on these [open source lists][github-privacy-configuration], which vary by platform and protection, to maintain a seamless online experience.

| Platform | Support |
|---|---|
| All platforms | All platforms provide feedback channels for reporting tracker-dependent breakage. |


## Everyday Privacy Controls


### The Fire Button

As you visit websites, everyday data, like regular cookies and browser storage, builds up locally in the browser. We’ve made it simple to clear data like this from the DuckDuckGo app’s local storage on your device with the “Fire Button.”

The Fire Button erases traces of websites that you’ve visited (like cookies, website caches, and favicons), browsing session information (like open tabs, back button history, and visited URLs), and permissions you’ve granted to websites (like geolocation, camera, and microphone settings). For additional control, you can also make specific sites partially immune to the Fire Button by “Fireproofing” them. Fireproofing a website keeps some helpful data around, like 1st-party cookies and storage that would otherwise be cleared out by the Fire Button, so you can stay signed in.

From DuckDuckGo app Settings, you can manage your Fireproof Sites and choose whether you’d like to automatically clear tabs and data on restart. It’s important to note that the Fire Button will not clear the following: 1st-party cookies and storage for Fireproof Sites, bookmarks, downloaded files, or DuckDuckGo Search settings. This type of protection is not offered in most popular browsers by default.

| Platform | Support |
|---|---|
| Firefox extension | Unsupported |
| Chrome extension | Unsupported |
| Edge extension | Unsupported |
| Opera extension | Unsupported |
| Safari extension | Unsupported |
| iPhone & iPad app | Clears all browsing history and data. Supports automatic clearing on restart. |
| Android app | Clears all browsing history and data. Supports automatic clearing on restart. |
| Mac app | Clears all browsing history and data. Can also clear data for visited sites per-tab and per-window. Automatic clearing on restart on our product roadmap. |


### Cookie Consent Pop-Up Management

Cookie consent pop-ups often use dark design patterns to get you to accept the least private option. When DuckDuckGo detects a cookie consent pop-up on sites you visit, we can automatically set your cookie preferences to instead maximize privacy and minimize cookies, then close the pop-up. We currently offer coverage for approximately 80% of the top 250 websites in the UK and Germany and plan to expand coverage to additional websites over time.

Visit Settings in our supported apps and extensions to enable this feature. You can review [our open source code][github-autoconsent] for this feature. This type of protection is not offered in most popular browsers by default.

| Platform | Support |
|---|---|
| Firefox extension | Unsupported, but on our product roadmap. |
| Chrome extension | Unsupported, but on our product roadmap. |
| Edge extension | Unsupported, but on our product roadmap. |
| Opera extension | Unsupported, but on our product roadmap. |
| Safari extension | Unsupported, but on our product roadmap. |
| iPhone & iPad app | Unsupported, but on our product roadmap. |
| Android app | Unsupported, but on our product roadmap. |
| Mac app | Minimizes cookies, maximizes privacy, and closes cookie consent pop-ups on our list. Additional coverage on our product roadmap. |


### Global Privacy Control (GPC)

Global Privacy Control (GPC) intends to help you express your opt-out rights automatically by telling websites (through a header and/or JavaScript-based signal) not to sell or share your personal information. Whether it can be used to enforce your legal rights (for example, current or future CCPA, GDPR requirements) depends on the laws in your jurisdiction. You can [learn more about GPC][gpc] and review our open source code for [Chrome/Firefox/Edge/Opera][github-gpc-extension], [iOS][github-gpc-ios], [Android][github-gpc-android]. This type of protection is not offered in most popular browsers by default.

| Platform | Support |
|---|---|
| Firefox extension | GPC signal sent via header and JavaScript to all sites. |
| Chrome extension | GPC signal sent via header and JavaScript to all sites. |
| Edge extension | GPC signal sent via header and JavaScript to all sites. |
| Opera extension | GPC signal sent via header and JavaScript to all sites. |
| Safari extension | Unsupported. Platform restricts setting custom headers. |
| iPhone & iPad app | GPC signal sent via JavaScript to all sites. Sending GPC header signal only supported for websites known to respect GPC due to platform limitations that would cause page load interruptions during back navigation. |
| Android app | GPC signal sent via JavaScript to all sites. Sending GPC header signal only supported for websites known to respect GPC due to platform limitations that would cause page load interruptions during back navigation. |
| Mac app | GPC signal sent via JavaScript to all sites. Sending GPC header signal only supported for websites known to respect GPC due to platform limitations that would cause page load interruptions during back navigation. |


## How to Get our Web Tracking Protections

To get the privacy protections as described above, install the relevant DuckDuckGo app or extension: 

- **Firefox:** [get the extension][product-firefox] \| [view open source code][github-extension]
- **Chrome:** [get the extension][product-chrome] \| [view open source code][github-extension]
- **Edge:** [get the extension][product-edge] \| [view open source code][github-extension]
- **Opera:** [get the extension][product-opera] \| [view open source code][github-extension]
- **Safari:** [get the extension][product-safari] \| [view open source code][github-safari]
- **iPhone & iPad:** [get the app][product-ios] \| [view open source code][github-ios]
- **Android:** [get the app][product-android] \| [view open source code][github-android]
- **Mac:** our Mac app (beta) code will be open source soon

If you use another Chromium-based browser like Vivaldi, you can usually install the [Chrome][product-chrome] version. 

For questions, comments, or concerns, please feel free to [contact us][contact-us]. 


[//]: # (Links internal to this document.)
[3rd-party-tracker-loading-protection]: #3rd-party-tracker-loading-protection
[3rd-party-cookie-protection]: #3rd-party-cookie-protection
[1st-party-cookie-protection]: #1st-party-cookie-protection
[global-privacy-control-gpc]: #global-privacy-control-gpc
[link-tracking-protection]: #link-tracking-protection
[cname-cloaking-protection]: #cname-cloaking-protection
[google-amp-protection]: #google-amp-protection
[surrogates]: #surrogates

[//]: # (Links internal to this help site)
[no-tracking]: /duckduckgo-help-pages/privacy/no-tracking/
[ads-by-microsoft-on-duckduckgo-private-search]: /duckduckgo-help-pages/company/ads-by-microsoft-on-duckduckgo-private-search/
[embedded-content-protection]: /duckduckgo-help-pages/privacy/embedded-content-protection/
[contact-us]: /duckduckgo-help-pages/company/contact-us/

[//]: # (Spread Privacy blog post links)
[post-tracker-radar]: https://spreadprivacy.com/duckduckgo-tracker-radar/
[post-private-ad-conversions]: https://spreadprivacy.com/more-privacy-and-transparency/
[post-topics-fledge-protection]: https://spreadprivacy.com/topics-and-fledge-blocked/

[//]: # (DuckDuckGo product pages)
[product-firefox]: https://addons.mozilla.org/firefox/addon/duckduckgo-for-firefox/
[product-chrome]: https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg
[product-edge]: https://microsoftedge.microsoft.com/addons/detail/duckduckgo-privacy-essent/caoacbimdbbljakfhgikoodekdnlcgpk
[product-opera]: https://addons.opera.com/extensions/details/duckduckgo-for-opera-2/
[product-safari]: https://apps.apple.com/us/app/duckduckgo-privacy-essentials/id1482920575
[product-ios]: https://apps.apple.com/app/duckduckgo-privacy-browser/id663592361
[product-android]: https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android
[product-mac]: https://spreadprivacy.com/introducing-duckduckgo-for-mac/

[//]: # (DuckDuckGo GitHub links)
[github-duckduckgo]: https://github.com/duckduckgo
[github-tracker-radar]: https://github.com/duckduckgo/tracker-radar
[github-list-of-trackers]: https://github.com/duckduckgo/tracker-blocklists
[github-fingerprint-protection]: https://github.com/duckduckgo/content-scope-scripts/tree/main/src/features
[github-smarter-encryption]: https://github.com/duckduckgo/smarter-encryption
[github-tracking-parameters]: https://github.com/duckduckgo/privacy-configuration/blob/main/features/tracking-parameters.json
[github-block-amp-content]: https://github.com/duckduckgo/BrowserServicesKit/blob/main/Sources/BrowserServicesKit/LinkProtection/AMPCanonicalExtractor.swift
[github-topics-fledge-disable]: https://github.com/duckduckgo/content-scope-scripts/blob/main/src/features/google-rejected.js
[github-surrogates]: https://github.com/duckduckgo/tracker-surrogates
[github-privacy-configuration]: https://github.com/duckduckgo/privacy-configuration
[github-autoconsent]: https://github.com/duckduckgo/autoconsent
[github-gpc-extension]: https://github.com/duckduckgo/duckduckgo-privacy-extension/blob/develop/shared/js/background/events.es6.js
[github-gpc-ios]: https://github.com/duckduckgo/iOS/blob/develop/Core/donotsell.js
[github-gpc-android]: https://github.com/duckduckgo/Android/blob/develop/privacy-config/privacy-config-impl/src/main/java/com/duckduckgo/privacy/config/impl/features/gpc/RealGpc.kt
[github-google-sso]: https://github.com/duckduckgo/Android/blob/develop/app/src/main/java/com/duckduckgo/app/browser/cookies/ThirdPartyCookieManager.kt
[github-extension]: https://github.com/duckduckgo/duckduckgo-privacy-extension
[github-safari]: https://github.com/duckduckgo/privacy-essentials-safari
[github-ios]: https://github.com/duckduckgo/iOS
[github-android]: https://github.com/duckduckgo/Android

[//]: # (External links)
[analytics-usage-distribution]: https://trends.builtwith.com/analytics/traffic/Entire-Internet
[google-analytics-data-sharing]: https://support.google.com/analytics/answer/1011397
[webkit-cookie-tracking-protection]: https://webkit.org/tracking-prevention/#the-default-cookie-policy
[safari-app-extensions]: https://developer.apple.com/documentation/safariservices/safari_app_extensions
[safari-web-extensions]: https://developer.apple.com/documentation/safariservices/safari_web_extensions
[webkit-fingerprinting-protection]: https://webkit.org/tracking-prevention/#anti-fingerprinting
[webkit-upgrading-protection]: https://developer.apple.com/documentation/safari-release-notes/safari-15-release-notes
[webkit-anti-fingerprinting]: https://webkit.org/tracking-prevention/#anti-fingerprinting
[webkit-referrer-tracking-protection]: https://webkit.org/tracking-prevention/#downgraded-third-party-referrers
[amp-about]: https://amp.dev/about/websites-2021/
[topics-fledge-announcement]: https://blog.chromium.org/2022/03/what-to-expect-from-ps-testing.html
[fledge]: https://developer.chrome.com/docs/privacy-sandbox/fledge/
[fledge-browsing-history]: https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md
[gpc]: https://globalprivacycontrol.org
[android-webview-api]: https://developer.android.com/reference/android/webkit/CookieManager#setAcceptThirdPartyCookies(android.webkit.WebView,%20boolean)
[social-ctp-config]: https://staticcdn.duckduckgo.com/useragents/social_ctp_configuration.json
