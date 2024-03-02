# 認証・認可機能の実装

React, deno, supabaseのアプリにおいて、認証・認可機能の実装にどのような方法があるのか
調査し、検討する。

## chatGPTによる回答
React、Deno、およびSupabaseを使用してアプリを開発し、認証認可を実装するためのいくつかの選択肢があります。以下にいくつかのオプションを示します。

    Supabase Auth:
    Supabaseは認証機能を提供しており、Supabase Authを使用することで簡単に認証を組み込むことができます。Supabase Authは、メール/パスワード、ソーシャルログイン（Google、GitHubなど）、OAuthプロバイダ（Google、GitHubなど）などの認証プロバイダをサポートしています。

    Firebase Authentication:
    Firebase Authenticationも、Reactと組み合わせて使用できる強力な認証ソリューションです。Firebaseは多くの認証プロバイダをサポートしており、Reactとの統合も簡単です。

    OAuth/OpenID Connect:
    カスタムの認証プロセスを構築するために、OAuthやOpenID Connectを使用することもできます。Deno上でOAuthやOpenID Connectのライブラリを使用して認証を実装し、その後、Reactで認証されたユーザー情報を扱います。

    JWT (JSON Web Tokens):
    JSON Web Tokensを使用して認証トークンを発行し、DenoとReact間でトークンを送受信して認証を実装する方法も考えられます。サーバーサイドでDenoがJWTを検証し、クライアントサイドでReactがJWTを使用してユーザーの認証状態を管理します。

    Auth0:
    Auth0は、DenoとReactの両方で使用できる認証プラットフォームで、様々な認証プロバイダと統合できます。Auth0を使用することで、標準的な認証フローを簡単に実装できます。


まあ、Supabaseからまとめてみるか。

## Supabase
認証：Authentication
認可：Authorization

認証には以下の方法がある
- パスワードを用いた方法：メールアドレスとパスワードを使う
- パスワードを用いない方法：マジックリンクを送る、もしくはワンタイムパスワード(OTP)
- OAuth social providers
- SAML SSO

SAMLとはSecurity Assertion Markup Language の頭文字をとったもので、
SSO(シングルサインオン)やID連携などで利用される、マークアップ言語で利用される
認証情報の規格のこと。

mozillaによると
```
A standardized identity and authorization protocol for authentication that uses XML.
```
XMLを使用するに認証のための標準化されたIDおよび認可プロトコル

SSO Single Sign On
```
A SAML or OIDC Provider(OP) and set of relying parties (SPs/RPs) that 
provide a unique sign-on panel for users, and that coherently hondle session 
information for the user.
```

