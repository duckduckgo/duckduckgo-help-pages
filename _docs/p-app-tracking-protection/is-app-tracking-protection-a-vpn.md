---
title: Is App Tracking Protection a VPN?
nav_title: Is App Tracking Protection a VPN?
description: No. Instead of sending your data to a VPN server, App Tracking Protection works locally on your device, sitting between your apps and the servers they talk to.
image: /images/apptp-vpn.png
category: App Tracking Protection
order: 400
---

App Tracking Protection is a feature in the [DuckDuckGo Private Browser for Android](https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android) that helps block 3rd-party trackers in your apps, even when you’re not using them. Though similar, App Tracking Protection is different from a VPN.

App Tracking Protection works locally on your device, sitting between your apps and the servers they talk to. When App Tracking Protection recognizes a tracker on our [list of app trackers](https://github.com/duckduckgo/tracker-blocklists/blob/main/app/README.md), it blocks the tracker from sending personal information (such as your IP address, activity, and device details) off your device. All other traffic reaches its destination, so your apps work normally.

A VPN is different. It works by establishing a secure, encrypted connection (VPN tunnel) between your device and one of its servers. All device network traffic that passes through this tunnel is anonymized and hidden from your Internet service provider and other websites you visit.

The DuckDuckGo [VPN]({{ site.baseurl }}/privacy-pro/vpn) works in the same way, and secures your connection across your entire device, including your apps and browsers, on up to five devices at once. Plus, it has a strict no-logging policy, and you can connect in just a click, directly from the DuckDuckGo browser. [Learn more]({{ site.baseurl }}/privacy-pro/vpn)

## Is my data private?

Yes. As explained above, App Tracking Protection just works on your device and doesn’t send your personal data off your device to DuckDuckGo or other companies.

## If not a VPN, then why does App Tracking Protection use a VPN connection?

You will be asked to set up a virtual private network (VPN) connection, but you don’t need to install a VPN app for App Tracking Protection to work.

This permission allows App Tracking Protection, which just works locally on your device, to monitor network traffic so that it can block trackers on our list.

## Will App Tracking Protection work if I also use a VPN app?

App Tracking Protection is only compatible with the DuckDuckGo VPN. Because Android only allows one active VPN connection per device, App Tracking Protection won’t work with other VPNs. However, the DuckDuckGo VPN can share the same VPN connection because both features are managed by the DuckDuckGo browser.

If using a different VPN, we recommend that you enable App Tracking Protection when you are not using other VPNs. Just make sure your VPN app isn’t set to “Always-on.” Go to Android Network settings > VPN. Then, check the gear icon for any listed VPN apps and disable “Always-on.” Some VPN apps may also have an auto-connect setting which must be disabled.

{% include category-footer-nav.md %}
