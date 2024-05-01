---
title: Use of Digital Rights Management (DRM) in the DuckDuckGo Browser
nav_title: Digital Rights Management Permissions
description: Learn how the DuckDuckGo browser handles DRM permissions.
category: Web Browsing Privacy
order: 500
---

Many websites which stream music or video content (e.g., Netflix or Spotify) require browsers to support Digital Rights Management (DRM) technology. This technology is used to control playback of copyrighted content.

We assess the privacy and usability implications of supporting features in our browsers, including DRM.
In the DuckDuckGo browser for Android, DRM permissions are only available for websites that use [Widevine](https://widevine.com/), which is one of the most popular industry standards, but is also [known to provide access to device identifiers](https://petsymposium.org/popets/2023/popets-2023-0112.pdf) on Android.
Over time, we'll investigate the privacy risks and protection for DRM on other platforms, as well as other DRM providers.

If you see the following permission prompt on a website and click “Allow” in a DuckDuckGo browser, this allows the website to access the DRM technology provided by your device.

![Screenshot of a browser location permission dialog]({{ site.baseurl }}/images/drm-permission-prompt.png)

**When should you allow DRM permissions?**

In some cases, you may be comfortable sharing an identifier with a website such as Netflix, but you may want to disallow DRM on websites you don’t trust, especially when they do not contain any media content.
