---
layout: post
title: "プロジェクトを始める"
---

### 1. BundlerによるJekyllのインストール

プロジェクトのディレクトリを作成し、ディレクトリ内でbundle initを実行し、Gemfileを生成する。

```shell
mkdir mysite
cd mysite
bundle init
```

エディタでGemfileに、gem "jekyll" を追記する。

```ruby
# Gemfile
source "https://rubygems.org"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

gem "jekyll" # 追記
```

bundle installを実行してjeykllをインストールする。依存gemがたくさん入るので少し時間がかかる。

```shell
bundle install
```

### 2. 空プロジェクトの作成

bundle execコマンドに、Jekyll newコマンドを続け、. --force オプション（既存ディレクトリにソースを展開）、--blank オプション（空プロジェクトを指定）を付けて実行する。

```shell
bundle exec jekyll new . --force --blank
```

### 3.ローカルサーバの起動

bundle exec jekyll server を実行（serverは、s に省略できる）し、ローカルにjekyllを立ち上げる。

```shell
bundle exec jekyll s
#-> Server address: localhost:4000
#-> Server running... press ctrl-c to stop.
```

ブラウザのアドレスバーへlocalhost:4000。プロジェクトの画面を確認できる。

![ready to go](../../../../safari-night/images/ready-to-go.jpg)


### 4. Githubへpushする場合

.gitignoreの記述例。

```yml
# .gitignore
_site
.jekyll-cache
vendor
```


