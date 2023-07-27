---
title: Welcome
nav_title: Welcome
description: Want to know more about a DuckDuckGo product or feature? Find answers to frequently asked questions and more at DuckDuckGo Help.
---

Welcome to DuckDuckGo Help - If you can't find an answer to your DuckDuckGo question, [ask the community](https://www.reddit.com/r/duckduckgo/)!

{% include searchbox.html %}

<!-- List of categories and sub-categories -->
<ul class="welcome-category-list">
{% for category in site.categories_data %}
<li><a href="{{ site.baseurl }}{{ category.path }}">{{ category.name }}</a></li>
    {% for subcat in category.sub_categories %}
    <li><a href="{{ site.baseurl }}{{ subcat.path }}">{{ category.name }} - {{ subcat.name }}</a></li>
    {% endfor %}
{% endfor %}
