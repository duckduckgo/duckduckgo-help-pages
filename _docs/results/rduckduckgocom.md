---
title: r.duckduckgo.com
category: Results
order: 421
---

<p>
    When you click on a link in our results page, your search terms are not sent
    to the site that you click on, which can be the case on other search engines
    due to something called
    <a href="https://wikipedia.org/wiki/Http_referer">HTTP "referers"</a>.
</p>
<p>
    On modern browsers we accomplish this by adding a small piece of code to our
    page called
    <a href="https://w3c.github.io/webappsec-referrer-policy/">Meta referrer</a>.
    Some browsers (especially older ones) do not support this standard, however.
    For those browsers, and also in situations where meta referrer doesn't work,
    we send the request back to our servers to remove search terms. This redirect
    goes through r.duckduckgo.com.
</p>

<p>
    You can disable this privacy feature. To do that, go to
    <a href="https://duckduckgo.com/settings#privacy">the settings page</a>,
    select <em>Privacy</em>, and change the option <em>Redirect</em> to
    <em>Off</em>.
</p>

<p>
    You also go through a duckduckgo.com redirect when you use a bang. That's
    simply because we need to know where to send you.
</p>

<p>
    Once you land on another site, though, you are subject to that site's privacy
    policy, as we have no control over the tracking that occurs outside of our
    domains. If you're interested in end-to-end anonymous browsing, check out the
    <a href="https://www.torproject.org/">Tor browser</a>, which will help you
    maintain your anonymity while on other sites.
</p>