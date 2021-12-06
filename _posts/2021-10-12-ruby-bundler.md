---
layout: post
title: "rubyとbundler"
---

Jekyllは静的サイトジェネレータ（SSG）としては古く2013年にリリースされている。まだrubyとrailsに勢いがあった頃か。そのためネット上では古い情報もあり、rubyやweb技術に馴染みがないとハマりどころも多い。<br/>

[公式サイト](http://jekyllrb-ja.github.io/)を参考に環境を作るのだが、クイックスタートなどに掲載されている gem install bundler jekyll を叩くと環境が汚れるのでお勧めしない。

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
