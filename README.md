# DuckDuckGo Help Pages
View these live at: https://help.duckduckgo.com

## Credit
This site was built using the excellent, open-source, [Edition template](https://github.com/CloudCannon/edition-jekyll-template) from CloudCannon.

## Develop

[Jekyll](http://jekyllrb.com/) version >= 3.3.1 is required.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve --baseurl ""
~~~

## Settings

### Search

* Add `excluded_in_search: true` to any documentation page's front matter to exclude that page in the search results.
