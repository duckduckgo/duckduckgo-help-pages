###### Learn More

<ul class="footer-nav">
{% assign docs = site.docs | where_exp:"item", "item.layout != 'redirect'" | where_exp:"item", "item.category == page.category" %}
{% for doc in docs %}
    {% if doc.url != page.url %}
        <li class="footer-nav-item {% if doc.url == page.url %}footer-nav-item-current-page{% endif %}">
            <a href="{{ site.baseurl}}{{ doc.url }}">{{ doc.title }}</a>
        </li>
    {% endif %}
{% endfor %}
</ul>
