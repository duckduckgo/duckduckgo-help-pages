---
title: Safe search
category: Features
order: 721
---

<p>
    Safe search lets you remove adult content from results on DuckDuckGo. You can
    easily control it in the following ways:
</p>

<ul>
    <li>
        With the dropdown box under the search box in our results pages (see
        screenshot below).
    </li>
    <li>
        With the "Safe Search" option in the
        <a href="https://duckduckgo.com/settings">DuckDuckGo settings page</a>.
    </li>
    <li>
        By appending !safeoff to your search (this uses our
        <a href="https://duckduckgo.com/bang">bang</a> syntax).
    </li>
    <li>
        By using
        <a href="https://safe.duckduckgo.com">safe.duckduckgo.com</a> instead.
        Searches from safe.duckduckgo.com always have safe search set to "strict".
    </li>
</ul>
<p>
    <img alt="Screenshot showing safe search option below the search box." src="{{ site.baseurl }}/images/3ef517567542255d5cbd61f132f07e5e.png" />
</p>
<p>
    For more technical users, if you want to force safe search on (or off) you
    could use our URL parameters and automatically append
    <em>&amp;kp=1</em> (strict), <em>&amp;kp=-1</em> (moderate - don't show
    explicit results), or <em>&amp;kp=-2</em> (off) to all duckduckgo.com pages.
</p>

<p>
    We try hard to respect your safe search preference, but sometimes content does
    get through that is not appropriately restricted. If you notice this
    happening, we'd appreciate you letting us know via the "Send feedback" button
    on the right-hand side of our search results (on desktop), and we'll do our
    best to resolve it in a timely fashion.
</p>

<h3>Force safe search at a network level</h3>

<p>
    For network administrators, you can force strict safe search for everyone on
    your network by mapping duckduckgo.com to safe.duckduckgo.com. Mapping to
    safe.duckduckgo.com will guarantee that safe search is enabled for all
    DuckDuckGo queries on the network, and that client safe search controls are
    disabled.
</p>

<p>
    To force safe search you will need to make a change to your DNS configuration.
    Set the DNS entry for duckduckgo.com to the safe.duckduckgo.com CNAME.
</p>
