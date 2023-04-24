---
title: DuckDuckGo Search Syntax
category: Results
order: 401
---

<p>DuckDuckGo supports search syntax you can use to fine-tune your queries.</p>

<h3>Search Operators</h3>
<table cellpadding="10">
    <thead>
        <tr>
            <th>Example</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>cats dogs</code></td>
            <td>Results about cats or dogs</td>
        </tr>
        <tr>
            <td><code>"cats and dogs"</code></td>
            <td>Results for exact term "cats and dogs". If no results are found, we'll try to show related results.</td>
        </tr>
        <tr>
            <td><code>cats -dogs</code></td>
            <td>Fewer dogs in results</td>
        </tr>
        <tr>
            <td><code>cats +dogs</code></td>
            <td>More dogs in results</td>
        </tr>
        <tr>
            <td><code>cats filetype:pdf</code></td>
            <td>
                PDFs about cats. Supported file types: pdf, doc(x), xls(x), ppt(x), html
            </td>
        </tr>
        <tr>
            <td><code>dogs site:example.com</code></td>
            <td>Pages about dogs from example.com</td>
        </tr>
        <tr>
            <td><code>cats -site:example.com</code></td>
            <td>Pages about cats, excluding example.com</td>
        </tr>
        <tr>
            <td><code>intitle:dogs</code></td>
            <td>Page title includes the word "dogs"</td>
        </tr>
        <tr>
            <td><code>inurl:cats</code></td>
            <td>Page url includes the word "cats"</td>
        </tr>
    </tbody>
</table>

<i>Please note: we are aware some of our advanced syntax isn't operating 100% correctly on all queries and are actively working on it. It is unfortunately a non-trivial issue given we get our private results from a <a href="{{ site.baseurl }}/results/sources">variety of sources</a>.</i>

<h3>Search Directly on Other Sites</h3>
<ul>
    <li>
        Use <code>\</code> to go to directly to the first search result. For
        example,
        <a href="https://duckduckgo.com/?q=%5Cfuturama"><code>\futurama</code></a>.
    </li>
    <li>
        Use <code>!</code> to search other sites' search engines directly. Remember,
        though, because your search is actually taking place on that other site, you
        are subject to that site’s policies, including its data collection
        practices. For example,
        <a href="https://duckduckgo.com/?q=!a blink182"><code>!a blink182</code></a>
        searches Amazon.com for blink182. There are
        <a href="https://duckduckgo.com/bang">thousands of sites covered</a>!
    </li>
</ul>

<h3>Safe Search</h3>
<ul>
    <li>
        Add <code>!safeon</code> or <code>!safeoff</code> to the end of your search
        to turn on and off
        <a href="{{ site.baseurl }}/features/safe-search">safe search</a> for that
        search.
    </li>
</ul>
