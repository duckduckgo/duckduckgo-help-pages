---
title: Improving DuckDuckGo
category: Privacy
order: 241
---

<p>
    At DuckDuckGo, we do not collect or share any personal information. That's our
    <a href="https://duckduckgo.com/privacy">privacy policy</a> in a nutshell. For
    example, we do not store IP addresses, and we do not create unique cookies. As
    such, we do not even have the ability to create search histories or search
    sessions for any individual — privacy by design.
</p>

<p>
    At the same time, we need a way to reliably improve our products for our users
    in an anonymous way. There are a few methods we've developed to achieve this.
</p>

<p>
    First, you might notice that when you search DuckDuckGo, there may be an
    "<code>&amp;atb=</code>", or "<code>&amp;ratb=</code>" URL parameter in the web address at the top of your
    browser. This parameter allows us to anonymously A/B (split) test product
    changes we make to DuckDuckGo. For example, users in the A group would get
    blue links and users in the B group would get red links, and we'd be able to
    measure how usage of DuckDuckGo is impacted by different color links.
</p>

<p>
    Second, we measure engagement of specific events on the page (e.g. when a
    misspelling message is displayed, and when it is clicked). This allows us to
    run experiments where we can test different misspelling messages and use CTR
    (click through rate) to determine the message's efficacy. If you are looking
    at network requests, these are the ones going to the one-pixel image at
    <code>improving.duckduckgo.com</code>. These requests are anonymous and the
    information is used only by us to improve our products.
</p>

<p>
    Third, you may notice similar <code>atb.js</code> or
    <code>exti</code> requests made by our browser extensions and mobile apps.
    These requests help us anonymously count how many devices are using an
    experience. For example, our browser extensions and mobile apps will send an
    <code>atb.js</code> request with each search made. These requests allow us to
    count approximately how many devices accessed DuckDuckGo without knowing
    anything about those devices or the exact searches they made.
</p>

<p>
    All of these requests are all fully encrypted in transit to DuckDuckGo, such
    that nobody else but us can see them. And like with all other requests to
    DuckDuckGo, there is no personally identifiable information embedded in them,
    and we do not store IP addresses associated with them.
</p>

<p>
    To be clear, this means
    <strong>we cannot ever tell what individual people are doing since everyone is
        anonymous</strong>, and that is a limit of our statistical methods since we are private by
    design. We can, however, within this anonymous limitation, reliably determine
    what changes are generally working, using these anonymous methods.
</p>

<p>
    We have developed these systems from scratch, instead of using third-party
    services, because of our privacy promise to never collect or share any
    personal information. We're proud to be able to improve our site for you in a
    completely anonymous way!
</p>

<p>
    If you have any concerns, please feel free to reach out to us directly at
    <a href="mailto:privacy@duckduckgo.com">privacy@duckduckgo.com</a>.
</p>
