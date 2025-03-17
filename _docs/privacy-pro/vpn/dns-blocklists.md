---
title: DuckDuckGo VPN DNS Blocklists
nav_title: VPN DNS Blocklists
description: Get answers to frequently asked questions about DuckDuckGo VPN, which gives you an extra layer of protection online, hiding your location and IP address from the sites you visit.
category: Privacy Pro
sub_category: VPN
order: 450
---

The DuckDuckGo VPN is pre-configured to use DuckDuckGo's domain name system (DNS) servers to convert the website names you type or navigate to (such as [duckduckgo.com](https://duckduckgo.com){:target="\_blank"}) into the IP addresses your device needs to find those sites. This helps protect your Internet traffic from being logged or monetized by your Internet service provider (ISP) or other third-party DNS providers. If you prefer to use a third-party DNS service instead, you can configure a custom DNS service under **VPN Settings** > **DNS Server**.

DuckDuckGo's DNS servers also use what’s called a DNS blocklist to help you avoid accidentally accessing harmful sites that might put your personal information at risk. These include sites that host malware, phishing attacks, and online scams.

## How does the DuckDuckGo DNS blocklist work?

When you try to access a website, your device performs a DNS query to translate the website name into an IP address. When the DuckDuckGo VPN is connected, these DNS queries will be sent to a DuckDuckGo DNS server.

When the DuckDuckGo DNS server receives a DNS query, it will first check the requested website name against a blocklist we update regularly. If the website name is on the blocklist, the DNS server will not return the website's IP address, and your browser will display an error message.

If you're using the DuckDuckGo browser, you would see a message explaining that DuckDuckGo can't load the page. Other browsers handle blocked DNS queries differently and may display a different error when a website is blocked by our VPN.

## How is the DuckDuckGo DNS blocklist created and updated?

The list of harmful domains is provided to us by our partner, [Netcraft](https://www.netcraft.com/){:rel="noopener noreferrer"}{:target="\_blank"}. The blocklist currently contains over 150,000 sites and is updated daily.

## Can I disable or customize the DuckDuckGo DNS blocklist?

You can disable the DNS blocklist by turning off “Block risky domains” under **VPN Settings** > **DNS Server**. If you disable the blocklist, DNS queries will continue to use a DuckDuckGo DNS server, but none of your DNS queries will be checked against the blocklist or blocked.

The DuckDuckGo DNS blocklist cannot be customized or modified at this time. However, if you would prefer to use a third-party DNS service that better fits your preferences, you can configure the DuckDuckGo VPN to use a custom DNS service under **VPN Settings** > **DNS Server**.

## A site was wrongfully blocked. How can I report it?

If you believe a website was incorrectly blocked by the DuckDuckGo VPN, you can report it to us at [privacypro@duckduckgo.com](mailto:privacypro@duckduckgo.com). You can also use the “Share Feedback” option found in the DuckDuckGo browser menu.
