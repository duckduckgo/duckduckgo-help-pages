---
title: How does DuckDuckGo App Tracking Protection work?
nav_title: How does App Tracking Protection work?
description: App Tracking Protection is a beta feature in DuckDuckGo for Android that helps block 3rd-party trackers in your apps, even when you’re not using them.
category: DuckDuckGo App Tracking Protection
order: 200
---

App Tracking Protection is a beta feature in the [DuckDuckGo Private Browser for Android](https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android) that helps block 3rd-party trackers in your apps, even when you’re not using them. App Tracking Protection detects when other apps on your phone are about to send data to any of the 3rd-party tracking companies in our [list of app trackers](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md). For example, when Facebook tries to track you in a health app. Our protection works to block tracking requests that occur over HTTPS, which includes the majority of app traffic on the Internet.

We continually work to keep our app tracker blocklist up to date by identifying new app trackers and mitigating how trackers attempt to evade us. When we update our list, your App Tracking Protection will update automatically.
