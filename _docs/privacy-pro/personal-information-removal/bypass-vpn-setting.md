---
title: What does the ‘allow traffic to bypass the VPN’ setting do?
nav_title: About the ‘bypass VPN’ Setting
description: Get answers to frequently asked questions about DuckDuckGo Personal Information Removal, which removes your personal information from sites that store and sell it.
category: Privacy Pro
sub_category: Personal Information Removal
order: 400
---

As explained in [Personal Information Removal Privacy]({{ site.baseurl }}/privacy-pro/personal-information-removal/privacy/), DuckDuckGo submits removal requests to data broker sites on your behalf directly from your device. These data broker sites may try to block these automated removal requests if they appear to be coming from a VPN.

By allowing Personal Information Removal traffic to bypass the [DuckDuckGo VPN]({{ site.baseurl }}/privacy-pro/vpn/), you can ensure that more of your records get removed while still enjoying VPN protection across the rest of your device. In addition, Personal Information Removal traffic is isolated from other browser activity on your computer, and no data from that traffic will persist on your device after the scan is complete.

## Is Personal Information Removal traffic still hidden from my ISP if it bypasses the VPN?

Yes. When the VPN is on, automated scans and removal requests from Personal Information Removal are still hidden from your Internet service provider even when “allow traffic to bypass the VPN” is on. That’s because we still route DNS queries for data broker sites through the VPN, sending them through our own DNS resolver instead of your ISP, which adds an additional privacy layer to the VPN.

{% include category-footer-nav.md %}

{% include privacy-pro-contact.md %}
