###### Learn More

<ul class="footer-nav">
{% assign docs = site.docs | where_exp:"item", "item.layout != 'redirect'" | where_exp:"item", "item.isIndex != true" | where_exp:"item", "item.category == page.category" | where_exp:"item", "item.sub_category == page.sub_category" | sort: 'order'%}
{% for doc in docs %}
    {% if doc.url != page.url %}
        <li class="footer-nav-item">
            <a href="{{ site.baseurl}}{{ doc.url }}">{{ doc.title }}</a>
        </li>
    {% endif %}
{% endfor %}

<!-- Show sub-categories -->

{% assign category = site.categories_data | where_exp:"item", "item.name == page.category" | first %}
{% for subcat in category.sub_categories %}
{% if subcat.name != page.sub_category %}

<li class="footer-nav-item">
    <a href="{{ site.baseurl}}{{ subcat.path }}">{{ category.name }} - {{ subcat.name }}</a>
</li>

{% endif %}
{% endfor %}
</ul>
