---
title: Content Security Policy (CSP) Reports
category: Privacy
order: 246
---

<p>
    At DuckDuckGo Search, we do not collect or share any personal information.
    That's our <a href="https://duckduckgo.com/privacy">privacy policy</a> in a
    nutshell. For example, we do not store IP addresses in our server logs, and
    we do not create unique cookie IDs. As such, we do not even have the ability
    to create search or browsing histories for any individual — it's privacy by
    design.
</p>

<p>
    To protect you (our users) and ensure a bug-free search experience, we use a
    standardized computer security specification called a
    <a href="https://en.wikipedia.org/wiki/Content_Security_Policy">Content Security Policy</a>
    or "CSP". Our CSP tells your browser which resources (e.g. JavaScript code,
    images, etc.) it should trust, fetch, and execute on DuckDuckGo.com, helping
    us detect and block malicious third-party attacks, like
    <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">Cross-Site-Scripting</a> 
    (XSS) attacks,
    <a href="https://en.wikipedia.org/wiki/Code_injection">code injection attacks</a>,
    <a href="https://en.wikipedia.org/wiki/Clickjacking">clickjacking</a>, and more.
</p>

<p>
    When searching on DuckDuckGo, you may occasionally see an additional request
    made to https://duckduckgo.com/csp_report.js or https://duckduckgo.com/csp_report_ed.js.
    This request sends us a report listing any potential CSP violations automatically,
    like when a legitimate resource fails to load, and helps us validate CSP updates
    we deploy.
</p>

<p>
    In line with our strict
    <a href="https://duckduckgo.com/privacy">privacy policy</a>, CSP reports
    contain no personal information — in other words, they're completely
    anonymous.
</p>
