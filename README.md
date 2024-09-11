#sudo su 
# DuckDuckGo Help Pages
View these live at: https://duckduckgo.com/duckduckgo-help-pages/

## Credit
This site was built using the excellent, open-source, [Edition template](https://github.com/CloudCannon/edition-jekyll-template) from CloudCannon.

## Develop

- Ruby version 2.7.4 is required:
  - [RVM](https://rvm.io/) is available in GitHub codepspaces and can be used to install this
  ```
  rvm install 2.7.4
  ```
- [Jekyll](http://jekyllrb.com/) version >= 3.3.1 is required

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
