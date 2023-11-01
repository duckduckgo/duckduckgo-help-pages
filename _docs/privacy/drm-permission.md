---
title: Use of Digital Rights Management (DRM) in the DuckDuckGo Browser
nav_title: Digital Rights Management Permissions
description: Learn how the DuckDuckGo browser handles DRM permissions.
category: DuckDuckGo Web Browsing Privacy
order: 500
---

Many websites which stream music or video content (e.g. Netflix or Spotify) require browsers to support Digital Rights Management (DRM) technology. This technology is used to control playback of copyrighted content.

If you see the following permission prompt on a website and click “Allow” in a DuckDuckGo browser, this allows the website to access the DRM technology provided by your device.

![Screenshot of a browser location permission dialog]({{ site.baseurl }}/images/drm-permission-prompt.png)

Currently, DRM permissions are supported by our Android browser, and only when a website is attempting to use [Widevine](https://widevine.com/) DRM technology. 
Widevine is the most popular DRM provider and public research has shown that it provides a stable device identifier in its Android implementation. 
We are in the process of investigating the privacy risks of and protection for DRM on other platforms, as well as other DRM providers. 

**When should you allow DRM permissions?**

In some cases, you may be comfortable sharing an identifier with a website such as Netflix, but you may want to disallow DRM on websites you don’t trust, especially when they do not contain any media content. 
