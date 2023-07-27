---
title: Is App Tracking Protection a VPN?
nav_title: Is App Tracking Protection a VPN?
description: No. Instead of sending your data to a VPN server, App Tracking Protection works locally on your device, sitting between your apps and the servers they talk to.
category: DuckDuckGo App Tracking Protection
order: 400
---

App Tracking Protection is a beta feature in the [DuckDuckGo Private Browser for Android](https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android) that helps block 3rd-party trackers in your apps, even when you’re not using them. App Tracking Protection is not a VPN.

A VPN sends your data from the device to its own server, where it secures and anonymizes your data from prying eyes. However, this allows the VPN company to see your network traffic.

App Tracking Protection is different. Instead of sending your data to a VPN server, App Tracking Protection works locally on your device, sitting between your apps and the servers they talk to.

Whenever App Tracking Protection recognizes a tracker on our [list of app trackers](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md), it blocks the tracker from sending personal information (such as your IP address, activity, and device details) off your device. All other traffic reaches its destination, so your apps work normally.

**Is my data private?**

Yes. As explained above, App Tracking Protection just works on your device and doesn’t send your personal data off your device to DuckDuckGo or other companies.

**If not a VPN, then why does App Tracking Protection use a VPN connection?**

You will be asked to set up a virtual private network (VPN) connection, but you don’t need to install a VPN app for App Tracking Protection to work.

This permission allows App Tracking Protection, which just works locally on your device, to monitor network traffic so that it can block trackers on our list.

**Will App Tracking Protection work if I also use a VPN app?**

Unfortunately, no because Android only allows one active VPN connection at a time. That means you can’t use App Tracking Protection while a VPN app on your device is running or set to “Always-on.”

We recommend that you enable App Tracking Protection when you are not using a VPN app. Just make sure your VPN app isn’t set to “Always-on.” Go to Android Network settings > VPN. Then, check the gear icon for any listed VPN apps and disable “Always-on.” Some VPN apps may also have an auto-connect setting which must be disabled.

{% include category-footer-nav.md %}
