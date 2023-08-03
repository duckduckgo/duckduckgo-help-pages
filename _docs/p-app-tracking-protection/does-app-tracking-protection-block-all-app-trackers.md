---
title: Does App Tracking Protection block trackers in all my apps?
nav_title: Does App Tracking Protection block all app trackers?
description: App Tracking Protection is a beta feature in DuckDuckGo for Android that helps block 3rd-party trackers in your apps, even when you’re not using them.
category: DuckDuckGo App Tracking Protection
order: 300
---

App Tracking Protection is a beta feature in the [DuckDuckGo Private Browser for Android](https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android) that helps block 3rd-party trackers in your apps, even when you’re not using them. We aim to protect your privacy as much as possible, but no service can eliminate all hidden app tracking or profiling. To be effective, App Tracking Protection needs to continually evolve to mitigate how trackers attempt to evade us without disrupting essential usability. Some apps depend on code delivered by 3rd-party trackers to function and blocking these trackers can cause apps to behave unexpectedly.

To preserve essential usability, we may make limited exceptions and automatically disable protection for individual apps. For example, we automatically disable protection for browsers and other apps that load websites so content appears normally.

In other cases, we can preserve essential usability by making limited exceptions for individual trackers while leaving protection enabled for apps.  For example, if blocking a certain 3rd-party tracker in a mobile game prevented players from receiving in-game rewards, we may make a limited exception for that tracker within the game app, while continuing to block the tracker in other apps.

We also don’t block trackers belonging to an app’s parent company (known as 1st-party trackers) because doing so would likely cause the app to behave unexpectedly. This means that protection may be automatically disabled for apps like those installed by default on your Android device.

If you think App Tracking Protection might be causing usability issues in one of your apps, you can manually disable protection for apps in Settings > App Tracking Protection > Manage > View Apps and report the issue you experienced to us. We review user-reported app issues daily, and work to address them continuously by updating our open source [list of app trackers and exceptions](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md) like those described above to preserve usability.

{% include category-footer-nav.md %}
