---
title: How to use advanced syntax on DuckDuckGo Search
nav_title: Advanced Search Syntax
description: Learn how to use syntax on DuckDuckGo Private Search to get the search results you want.
category: Search Results
order: 700
---

DuckDuckGo supports search syntax you can use to fine-tune your queries.

### Search Operators

|---|--|
| Example | Result |
|---|--|
| `cats dogs` | Results about cats or dogs |
| `"cats and dogs"` | Results for exact term "cats and dogs". If no or few results are found, we'll try to show related results. |
| `~"cats and dogs"` | Experimental syntax: more results that are semantically similar to "cats and dogs", like "cats & dogs" and "dogs and cats" in addition to "cats and dogs". |
| `cats -dogs` | Fewer dogs in results |
| `cats +dogs` | More dogs in results |
| `cats filetype:pdf` | PDFs about cats. Supported file types: pdf, doc(x), xls(x), ppt(x), html |
| `dogs site:example.com` | Pages about dogs from example.com |
| `cats -site:example.com` | Pages about cats, excluding example.com |
| `intitle:dogs` | Page title includes the word "dogs" |
| `inurl:cats` | Page URL includes the word "cats" |

If advanced syntax was used in a query and no results are found, we’ll try to show related results.

_Please note: we are aware some of our advanced syntax isn't operating 100% correctly on all queries and are actively working on it. It is unfortunately a non-trivial issue given we get our private results from a [variety of sources]({{ site.baseurl }}/results/sources)._

### Search Directly on Other Sites

-   Use `\` to go to directly to the first search result. For example, [`\futurama`](https://duckduckgo.com/?q=%5Cfuturama).
-   Use `!` to search other sites' search engines directly. Remember, though, because your search is actually taking place on that other site, you are subject to that site’s policies, including its data collection practices. For example, [`!a blink182`](https://duckduckgo.com/?q=!a blink182) searches Amazon.com for blink182. There are [thousands of sites covered](https://duckduckgo.com/bang)!

### Safe Search

-   Add `!safeon` or `!safeoff` to the end of your search to turn on and off [safe search]({{ site.baseurl }}/features/safe-search) for that search.
