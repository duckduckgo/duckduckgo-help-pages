---
title: Frequently Asked Questions
category: App Tracking Protection
order: 99
---

#### 1. How does App Tracking Protection work?

App Tracking Protection detects when other apps on your phone are about to send data to any of the 3rd-party tracking companies in [our list of app trackers](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md) and blocks most of those requests. For example, when Facebook tries to track you in a health app.

We continually work to keep our app tracker blocklist up to date by identifying new app trackers and mitigating how trackers attempt to evade us. When we update our list, your App Tracking Protection will update automatically.

#### 2. Does App Tracking Protection block trackers in all my apps?

Some apps depend on code delivered by 3rd-party trackers to function and blocking these trackers can cause apps to behave unexpectedly. We aim to deliver App Tracking Protection without disrupting essential app usability.

For example, we may automatically disable protection for certain apps, like those that load websites, so content appears normally. In other cases, we can sometimes leave protection enabled for apps and make limited exceptions for specific trackers. For example, if blocking a certain 3rd-party tracker in a mobile game prevented players from receiving in-game rewards, we may make a limited exception for that tracker within the game app, while continuing to block it in other apps.

We also don't block trackers belonging to an app’s parent company (known as 1st-party trackers) because doing so would likely cause the app to behave unexpectedly. This means that protection may be automatically disabled for apps like those installed by default on your Android device.

We review user-reported app issues daily, and work to address these usability issues continuously. You can also manage protection for individual apps on your device in Settings > App Tracking Protection > Manage > View Apps.

#### 3. Why does App Tracking Protection use a VPN connection?

You’ll be asked to set up a virtual private network (VPN) connection, but you don't need to install a VPN app for App Tracking Protection to work.

This permission allows App Tracking Protection, which works locally on your device, to monitor network traffic so that it can block trackers [on our list](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md).

#### 4. Will App Tracking Protection work if I also use a VPN app?

Android only allows one active VPN connection at a time. That means you can't use App Tracking Protection while a VPN app on your device is running or set to "Always-on."

We recommend that you enable App Tracking Protection when you are not using a VPN app. Just make sure your VPN app isn't set to "Always-on". Go to Android Network settings > VPN. Then, check the gear icon for any listed VPN apps and disable "Always-on." Some VPN apps may also have an auto-connect setting which must be disabled.

#### 5. How is App Tracking Protection different from a VPN?

A VPN sends your data from the device to its own server, where it secures and anonymizes your data from prying eyes. However, this allows the VPN company to see your network traffic.

App Tracking Protection is different. Instead of sending your data to a VPN server, App Tracking Protection works locally on your device, sitting between your apps and the servers they talk to.

Whenever App Tracking Protection recognizes a tracker [on our list](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md), it blocks the tracker from sending personal information (such as your IP address, activity, and device details) off your device. All other traffic reaches its destination, so your apps work normally.

#### 6. Is my data private?

App Tracking Protection works on your device and doesn’t send your personal data off your device to DuckDuckGo or other companies.
