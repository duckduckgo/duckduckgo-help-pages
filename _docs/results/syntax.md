---
title: DuckDuckGo Search Syntax
category: Results
order: 401
---

<p>DuckDuckGo supports search syntax you can use to fine-tune your queries.</p>

<h3>Search operators:</h3>
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

<h3>Search directly on other sites:</h3>
<ul>
    <li>
        Use <code>\</code> to go to directly to the first search result. For
        example,
        <a href="https://duckduckgo.com/?q=%5Cfuturama"><code>\futurama</code></a>
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

<h3>Instant Answers:</h3>
<ul>
    <li>
        Add <code>news</code> to your searches to generate Instant Answer news
        results. For example,
        <a href="https://duckduckgo.com/?q=LeBron+James+news"><code>LeBron James news</code></a>
    </li>
    <li>
        Add <code>map</code> to your search to generate Instant Answer map results.
        For example,
        <a href="https://duckduckgo.com/?q=philadelphia+map"><code>Philadelphia map</code></a>
    </li>
    <li>Find out more about <a href="https://duck.co/ia">Instant Answers</a>!</li>
</ul>

<h3>Safe search:</h3>
<ul>
    <li>
        Add <code>!safeon</code> or <code>!safeoff</code> to the end of your search
        to turn on and off
        <a href="/features/safe-search">safe search</a> for that
        search.
    </li>
</ul>
