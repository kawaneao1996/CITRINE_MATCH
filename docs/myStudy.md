# このドキュメントについて
2023年12月29日、一度学習した内容だが理解しきれていなかったのでここに内容をまとめつつ復習する。
チュートリアルの[リンク](https://reactrouter.com/en/main/start/tutorial)。
# 学習したことのまとめ

ルーティングを設定する一番上のコンポーネントで
- `createBrowserRouter`
- `RouterProvider`
をインポートする。これらは次のように使う。
```typescript
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
<RouterProvider router={router} />
```

アプリのレンダリング中、データの読み込み中、データ変異の実行中にエラーが
発生した際にエラー画面を表示するようにする。

```diff
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Root />,
+    errorElement: <ErrorPage />,
   },
 ]);
```
ちなみに`ErrorPage`コンポーネントの例は以下：
```typescript
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
```
この実装によって無限スピナーや無反応ページ、真っ白な画面が表示されることを避けることができる。

`createBrowserRouter`メソッドで`path`に変数を含める場合には
`path:"foo/:Id`のようにする。

`createBrowserRouter`メソッド
で定義した`element`を入れ子にするにはルートを定義しているコンポーネントで以下のようにする。
```diff
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Root />,
     errorElement: <ErrorPage />,
+    children: [
+      {
+        path: "contacts/:contactId",
+        element: <Contact />,
+      },
+    ],
   },
 ]);
```
そして入れ子の親コンポーネントに
`<Outlet/>`を追加する。
```diff
+import { Outlet } from "react-router-dom";
 
 export default function Root() {
   return (
     <>
       {/* all the other elements */}
       <div id="detail">
+        <Outlet />
       </div>
     </>
   );
 }
```
クライアントサイドルーティングとは
1. ユーザーが初めてアプリケーションにアクセスすると、サーバーから全てのページを生成するためのJavaScript、CSS、HTMLがダウンロードされます。これにより、以降のページ遷移はブラウザ上で完結します。

1. ユーザーがリンクをクリックすると、JavaScriptがそのイベントを検知します。JavaScriptは新しいURLをブラウザの履歴スタックにプッシュし、ブラウザのアドレスバーを更新します。この時点で、ページの再読み込みは行われません。

1. ルーティングライブラリ（例えばReact Router）がURLの変更を検知し、新しいURLに対応するコンポーネントを描画します。

新しいコンポーネントが描画されると、ユーザーは新しいページに遷移したかのように感じますが、実際にはページ全体の再読み込みは行われていません。これにより、ページ遷移が高速に行われ、ユーザー体験が向上します。

React Routerでクライアントサイドルーティングを行うには
`<Link/>`を使う。
```typescript
import { Link } from "react-router-dom";

return (
    <Link to={`contacts/1`}>Your Name</Link>
);
```

データの読み込み
URLセグメントとコンポーネント（レイアウト）、データはひとまとまりとして
扱うのが自然であり、React Routerにはそれをまとめて扱う仕組みがある。
それが`loader`と`useLoaderData` である。
使い方は
1. ルーティングを行うコンポーネント、もしくはその一つ下の階層で`loader`メソッドを定義する。
    ```typescript
       import { getContacts } from "../contacts";
       export async function loader() {
         const contacts = await getContacts();
         return { contacts };
       };
    ```
2. `1.`で定義した`loader`メソッドを`createBrowserRouter`メソッドの`loader`プロパティに設定する
   ```diff
   +import Root, { loader as rootLoader } from "./routes/root";
     const router = createBrowserRouter([
     {
         path: "/",
         element: <Root />,
         errorElement: <ErrorPage />,
   +     loader: rootLoader,
         children: [
         {
             path: "contacts/:contactId",
             element: <Contact />,
         },
         ],
     },
     ]);
   ```
3. `loader`で取得したデータを使用したい場合には、`useLoaderData`メソッドを使う。
   ```typescript
        import {
            Outlet,
            Link,
            useLoaderData,
        } from "react-router-dom";

        import { getContacts } from "../contacts";

        /* other code */

        export default function Root() {
        const { contacts } = useLoaderData();
   ```