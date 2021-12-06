---
layout: post
title: "Jekyllの空プロジェクト"
---

自作テーマの作成手順を作業ブログに残す。まずは空プロジェクトを作る。


### Bundler

- [Bundler Official](https://bundler.io/)

gemのパッケージ管理システム。プロジェクトのローカルにgemをインストール、gemのバージョン固定など、Ruby開発環境を支援する。Ruby2.6から標準ライブラリになる。

gemはプロジェクト下のvendor/bundleへinstallされる。

```shell
bundler --version
#-> Bundler version 2.2.24
bundle config path vendor/bundle
cd .bundle
cat config
#-> BUNDLE_PATH: "vendor/bundle"
```

bundlerの使い方

```shell
bundle init    #-> Gemfileを作成。
bundle install #-> Gemfileに書かれたgemをインストール
bundle exec ruby foo.rb # 実行
```

### Jekyllの導入

```shell
mkdir mysite
cd mysite
bundle init
vim Gemfile
```

Gemfileに、gem "jekyll" を追記。bundle installを実行。

```ruby
# frozen_string_literal: true
source "https://rubygems.org"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

gem "jekyll" # 追記
:wq
bundle install
```

空プロジェクトの導入。
- . --force : 既存ディレクトリ内にソースを展開させる。
- --blank : 付けないと minima theme が導入される。

```shell
bundle exec jekyll new . --force --blank
bundle exec jekyll s
#- Server address: localhost:4000
# You’re ready to go!
# Start developing your Jekyll website.
```

.gitignore

```yml
# .gitignore
_site
.jekyll-cache
vendor
```

[rouge](https://github.com/rouge-ruby/rouge)

```shell
rougify style monokai.sublime > syntax.css
```

1935年、実験計画法、婦人が紅茶を飲む実験
「紅茶にミルクを注ぐのとミルクに紅茶を注ぐのでは味が違うのよ」
ある夏の日の午後、（ケンブリッジ）、野外のテーブルでアフタヌーンティーを楽しむグループがいた。

ロナルド・エイルマー・フィッシャーが妻と三人の子供と義理の姉とともにロンドンの北にあるロザムステッド農事試験場に隣接した古い農家に移り住んだのは、1919年の春、29歳のときのことだった。どう考えても、彼は人生の敗北者だった。
