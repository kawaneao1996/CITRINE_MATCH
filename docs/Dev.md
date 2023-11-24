# 心理テストアプリの実装メモ
ここでは心理テストアプリのテンプレートを構築する際のメモを記録する。
更新履歴
- 2023/11/03　環境構築(devcontainer, Flask, Tailwind CSS)

目次
- [心理テストアプリの実装メモ](#心理テストアプリの実装メモ)
  - [環境構築メモ](#環境構築メモ)
    - [参考（というより内容はそのまま）](#参考というより内容はそのまま)
  - [画面設計のメモ](#画面設計のメモ)

## 環境構築メモ
1. git hub からクローン
    - https://github.com/kawaneao1996/PSYCHO_TEST_TEMPLATE.git
2. Flask用のディレクトリを作成
3. tailwind.config.jsの記述とstatic/src/input.cssの記述
    ```diff
        /** @type {import('tailwindcss').Config} */
        module.exports = {
    -  content: [],
    +  content: [
    +    "./templates/**/*.{html,htm}",
    +    "./static/**/*.js",
    +    "./**/*.py"
    +  ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
    ```
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
4. cssファイルのビルド
    ```shell
    npx tailwindcss -i ./static/src/input.css -o ./static/css/main.css
    # 修正が自動で更新されるのは以下
    npx tailwindcss -i ./static/src/input.css -o ./static/css/main.css --watch
    ```
    htmlには次のように書く
    ```html
    <link rel="stylesheet" href="static/css/main.css" type="text/css">
    ```
5. .envの設定
    .envを使用して```flask run```したときにdebugモード、デプロイモードにする。
    .envには
    ```
    FLASK_APP=app.py
    FLASK_ENV=development
    FLASK_DEBUG=True
    ```
    requirements.txtには
    ```diff
     flask==2.3.3
    + python-dotenv==1.0.0
    ```
    を追記した。
    プロダクションビルドの際には.envを書き換える運用にする。
6. dev_start.shを作成
   `./dev_start.sh`でflaskとtailwindが立ち上がる。停止する際にはCTRL+Cと`ps`,`kill -SIGTERM [pid]`を実行する
7. ~~eslintの導入~~ どうもflaskでeslintを入れた記事が出ないので諦めます
   ~~https://github.com/francoismassart/eslint-plugin-tailwindcss~~
   ~~を参考に。~~

### 参考（というより内容はそのまま）
- https://zenn.dev/d2c_mtech_blog/articles/1ae841dc099f03
## 画面設計のメモ
画面については３つを作成する。
PRGパターン（POST, REDIRECT, GET）で作成する。
POSTしたら即リダイレクトすることで二重にPOSTされないようにする。
POSTされるフォームの値はapp.pyで受け取る。


|endpoint|template(html)|説明|
|---|---|---|
|home|index.html|ホーム画面、ユーザーが最初に訪れる画面|
|answering|answering.html|ユーザーが回答する画面|
|result|result.html|心理テストの結果を表示する画面

各画面に必要な機能はそれぞれ、
- home:answeringへのリダイレクト。
- answering:フォームの結果を集計する。
- result:心理テストの結果を表示する。
    またマッチングアプリへのリダイレクトも行う。

心理テストの結果はマッチングアプリへのリダイレクトに使うので、
cookieでブラウザにもたせる。