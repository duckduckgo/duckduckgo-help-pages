---
title: Frequently Asked Questions
category: App Tracking Protection
order: 99
---

App Tracking Protection is a beta feature in [DuckDuckGo for Android](https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android) that helps block 3rd-party trackers in your apps, even when you’re not using them. When App Tracking Protection is enabled, it will detect when other apps on your phone are about to send data to any of the 3rd-party tracking companies in [our list](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md) of app trackers, and block most of those requests.

#### How does App Tracking Protection work?

App Tracking Protection detects when other apps on your phone are about to send data to any of the 3rd-party tracking companies in our [list of app trackers](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md). For example, when Facebook tries to track you in a health app. Our protection works to block tracking requests that occur over HTTPS, which includes the majority of app traffic on the Internet.

We continually work to keep our app tracker blocklist up to date by identifying new app trackers and mitigating how trackers attempt to evade us. When we update our list, your App Tracking Protection will update automatically.

#### Does App Tracking Protection block trackers in all my apps?

We aim to protect your privacy as much as possible, but no service can eliminate all hidden app tracking or profiling. To be effective, App Tracking Protection needs to continually evolve to mitigate how trackers attempt to evade us without disrupting essential usability. Some apps depend on code delivered by 3rd-party trackers to function and blocking these trackers can cause apps to behave unexpectedly.

To preserve essential usability, we may make limited exceptions and automatically disable protection for individual apps. For example, we automatically disable protection for browsers and other apps that load websites so content appears normally.

In other cases, we can preserve essential usability by making limited exceptions for individual trackers while leaving protection enabled for apps.  For example, if blocking a certain 3rd-party tracker in a mobile game prevented players from receiving in-game rewards, we may make a limited exception for that tracker within the game app, while continuing to block the tracker in other apps.

We also don't block trackers belonging to an app’s parent company (known as 1st-party trackers) because doing so would likely cause the app to behave unexpectedly. This means that protection may be automatically disabled for apps like those installed by default on your Android device.

If you think App Tracking Protection might be causing usability issues in one of your apps, you can manually disable protection for apps in Settings > App Tracking Protection > Manage > View Apps and report the issue you experienced to us. We review user-reported app issues daily, and work to address them continuously by updating our open source list of [app trackers and exceptions](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md) like those described above to preserve usability.

#### Why does App Tracking Protection use a VPN connection?

You’ll be asked to set up a virtual private network (VPN) connection, but you don't need to install a VPN app for App Tracking Protection to work.

This permission allows App Tracking Protection, which works locally on your device, to monitor network traffic so that it can block trackers on [our list](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md).

#### Will App Tracking Protection work if I also use a VPN app?

Android only allows one active VPN connection at a time. That means you can't use App Tracking Protection while a VPN app on your device is running or set to "Always-on."

We recommend that you enable App Tracking Protection when you are not using a VPN app. Just make sure your VPN app isn't set to "Always-on.” Go to Android Network settings > VPN. Then, check the gear icon for any listed VPN apps and disable "Always-on." Some VPN apps may also have an auto-connect setting which must be disabled.

#### How is App Tracking Protection different from a VPN?

A VPN sends your data from the device to its own server, where it secures and anonymizes your data from prying eyes. However, this allows the VPN company to see your network traffic.

App Tracking Protection is different. Instead of sending your data to a VPN server, App Tracking Protection works locally on your device, sitting between your apps and the servers they talk to.

Whenever App Tracking Protection recognizes a tracker on [our list](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md), it blocks the tracker from sending personal information (such as your IP address, activity, and device details) off your device. All other traffic reaches its destination, so your apps work normally.

#### Is my data private?

App Tracking Protection works on your device and doesn’t send your personal data off your device to DuckDuckGo or other companies.

## How to Get Our App Tracking Protection 

To get the privacy protections described above, install the relevant DuckDuckGo app or extension:

-   **Android:** [get the app](https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android) \| [view open source code](https://github.com/duckduckgo/Android)

For questions, comments, or concerns, please feel free to [contact us](https://help.duckduckgo.com/duckduckgo-help-pages/company/contact-us/).
