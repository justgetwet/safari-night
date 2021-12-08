---
layout: post
title: "rubyとbundler"
---

### Ruby

Jekyllは静的サイトジェネレータ（SSG）としては古く2008年にリリースされている。まだrubyとrailsに勢いがあった頃か。自分もrubyをよく書いた時期もあったが、最近はpythonばかり。やはりrubyは楽しいので、rubyの環境・スキルを保つためにJekyllを使うという一面もある。実はJekyllでrubyのコードを書くことは殆どないのだが。

### 公式のクイックスタートに注意

そのためネットでは新旧の情報があり、基本的に[公式サイト](http://jekyllrb-ja.github.io/)をベースにするべき。

クイックスタートなどに掲載されている gem install bundler jekyll を叩くと環境が汚れるので注意。

### Gem

Jekyllは結構沢山の

のでお勧めしない。はじめは混乱することもある。当然rubyやweb技術に馴染みがないとハマりどころも多い。<br/>

に環境を作るのだが、

### rubyインストール

rubyにはビルドツールgccとmakeが必要。

- mac

```shell
xcode-select --install # ビルドツール ?
brew install ruby
```

- windows

[RubyInstaller](https://rubyinstaller.org/downloads/)をダウンロードして展開する。ビルドツールを含むRuby+Devkitを指定する。

インストールウィザードの最後の段階で、ridk install ステップを実行する?

### Bundler

gemのパッケージ管理システムBundlerは、ruby xx から標準ライブラリに含まれるので敢えてインストールする必要はない。

### Jeykllのインストール

Jeykllはかなりの量のgemを含むので後の依存関係を考えるとグローバルにインストールするのは危険。プロジェクト毎、Gemfileに記述してローカルインストールにする。


Github Pagesとの依存関係を管理するgemのgithub-pagesというものがあり、これはGithubのバックエンドで動いているgemのバージョンをパッケージしたものか?
これが必要という場面に会わないので利用していない。
