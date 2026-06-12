# lesson09 レクチャー
## Git + GitHub + Vercel
## 90分レクチャー + 90分演習

---

## この回の位置づけ

lesson08 までで作ったページはローカルにしか存在しない。
lesson09 では、コードを GitHub に上げ、Vercel で全世界に公開する。
以降の授業では毎回デプロイして URL で確認できる状態を維持する。

---

## この回の到達目標

- Git の役割を説明できる
- `git init` / `add` / `commit` を実行できる
- GitHub にリポジトリを作り `push` できる
- Vercel と GitHub を連携して自動デプロイできる
- 公開 URL を取得して動作確認できる
- コードを変更して push すると自動再デプロイされることを確認できる

---

## Copilot の活用

lesson09 からは、詰まったときに Copilot Chat を積極的に使ってよい。

- エラーメッセージをそのままコピーして貼り付ける
- 「何をしているのかわからない」という状況説明でもよい
- 解決策が出たら内容を理解してから実行する

---

## トラブル事前確認

### npm がエラーになる場合

Node.js を `sudo` でインストールした場合、`~/.npm` の所有権が root になり
`npm install` が失敗することがある。以下で修復する。

```bash
sudo chown -R $(id -u):$(id -g) ~/.npm
sudo chown -R 501:20 "/Users/ユーザー名/.npm"
```

ユーザー名は自分の Mac のアカウント名に置き換える。

---

## 180分の構成

### 前半90分（レクチャー）

| 時間 | 内容 |
|---|---|
| 0〜15分 | Git / GitHub / Vercel の概念 |
| 15〜40分 | git init / add / commit |
| 40〜60分 | GitHub にリポジトリ作成 → push |
| 60〜80分 | Vercel デプロイ → URL 確認 |
| 80〜90分 | push → 自動再デプロイを確認 |

### 後半90分（演習）

推しページを作ってデプロイする。

---

# 前半90分 レクチャー

---

## 0〜15分 Git / GitHub / Vercel の概念

### VS Code / GitHub / Vercel の関係

この3つはそれぞれ役割が異なる。

```
VS Code
  コードを書く場所
  ↓ git add / git commit
ローカルの Git
  変更履歴を PC 上に記録する
  ↓ git push
GitHub
  コードをインターネット上に保存する
  push を検知して Vercel に通知する
  ↓ 自動デプロイ
Vercel
  コードをビルドして公開する
  本番 URL はここで発行される
```

### リポジトリとは

**リポジトリ**とは、コードの変更履歴を丸ごと保存した書庫である。

```
ローカルリポジトリ（自分のPC）
  → 作業する場所
  → commit で履歴を積み重ねる

リモートリポジトリ（GitHub）
  → インターネット上の書庫
  → push でローカルの履歴を送る
  → 書庫の内容は push しない限り変わらない
```

重要なのはこの2点だけ。

- commit = 今の状態をスナップショットとして記録する
- push = その記録を GitHub の書庫に送る

### Git の役割

**Git は、ファイルの変更履歴を記録するツールである。**

たとえば、

- 昨日の状態に戻したい
- どこを変更したか確認したい
- 壊れる前のコードに戻したい

こういうことが Git を使うとできる。

---

## 15〜40分 git init / add / commit

### ターミナルを開く

VS Code のターミナルを開く。

```
Terminal > New Terminal
```

`lesson09` フォルダにいることを確認する。

```bash
pwd
```

### npm install

```bash
npm install
```

### git init

リポジトリ（履歴を記録する場所）を初期化する。

```bash
git init
```

`Initialized empty Git repository` と出れば成功。

### .gitignore の確認

`node_modules` は容量が大きいため Git の管理対象から外す。
`.gitignore` はあらかじめ配布フォルダに含まれている。

```bash
cat .gitignore
```

`node_modules` と `dist` が表示されることを確認する。

### git add

変更したファイルを「次のコミットに含める」と指定する。

```bash
git add .
```

`.` は「全てのファイル」という意味。

### git commit

現在の状態を記録する。

```bash
git commit -m "first commit"
```

`-m "..."` はコミットメッセージ。何を変更したかを短く書く。

### ここで確認すること

```bash
git log --oneline
```

コミットが記録されているか確認する。

---

## 40〜60分 GitHub にリポジトリ作成 → push

### GitHub でリポジトリを作る

1. github.com にログインする
2. 右上の `+` → `New repository` を押す
3. Repository name に `lesson09` と入力する
4. `Public` を選ぶ
5. **`Add a README file` にチェックを入れない**
6. `Create repository` を押す

### Personal Access Token を発行する

GitHub はパスワード認証を廃止しているため、push には Personal Access Token が必要。

1. github.com → 右上のアイコン → `Settings`
2. 左メニュー最下部の `Developer settings` をクリックする
3. `Personal access tokens` → `Tokens (classic)`
4. `Generate new token (classic)` をクリックする
5. `Note`：任意の名前を入力する（例: `lesson09`）
6. `Expiration`：任意の期限を選ぶ
7. `repo` にチェックを入れる
8. `Generate token` を押す
9. 表示されたトークンをコピーする

**注意：トークンはこの画面を閉じると二度と表示されない。必ずコピーしてから閉じること。**

### リモートを登録して push する

GitHub に表示されるコマンドをそのまま実行する。
以下は例なので、自分のユーザー名のものを使う。

```bash
git remote add origin https://github.com/ユーザー名/lesson09.git
git branch -M main
git push -u origin main
```

パスワードを求められたら、コピーしたトークンを貼り付ける。

**注意：`git remote set-url` は実行しない。**

### ここで確認すること

- GitHub のリポジトリページを開く
- ファイルが表示されているか確認する
- `node_modules` が含まれていないことを確認する

---

## 60〜80分 Vercel デプロイ → URL 確認

### Vercel アカウントを作る

1. vercel.com を開く
2. `Sign Up` を押す
3. `Continue with GitHub` を選ぶ
4. GitHub の認証画面が開いたらログインして `Authorize Vercel` を押す
5. 名前・用途などの初期設定を入力して完了させる

### GitHub アプリをインストールする

Vercel と GitHub を連携するために GitHub アプリのインストールが必要になる。

1. `Install` ボタンが表示されたら押す
2. GitHub の `Install Vercel` 画面が開く
3. `Only select repositories` を選ぶ
4. `Select repositories` のドロップダウンから `lesson09` を選ぶ
5. `Install` を押す

### データ利用の設定

`Enabling Agentic Infrastructure` というダイアログが表示される。

1. `Improve models with my data` のトグルを**オフ**にする
2. `Got it` を押す

### プロジェクトをインポートする

1. Vercel のダッシュボードで `Add New... > Project` を押す
2. GitHub リポジトリの一覧から `lesson09` を選ぶ
3. `Import` を押す
4. Framework Preset が `Vite` になっていることを確認する
5. `Deploy` を押す

### ここで確認すること

- `Congratulations!` と表示されたらデプロイ成功
- `Continue to Dashboard` を押す
- Dashboard の Overview に表示される URL が本番 URL である
- その URL をブラウザで開いて動作確認する
- スマートフォンでも開いて確認する

### 本番 URL について

Vercel には2種類の URL が存在する。

| URL | 説明 |
|---|---|
| `lesson09-xxx.vercel.app` | 本番 URL。push するたびに自動更新される |
| `lesson09-xxxxxxx-ymmt2106-s-projects.vercel.app` | デプロイごとに発行される固有 URL。古いバージョンが表示される |

**必ず Dashboard の Overview に表示される本番 URL を使うこと。**

---

## 80〜90分 push → 自動再デプロイを確認

### App.tsx を変更する

`src/App.tsx` のデータ部分を何か変更して保存する。

### push する

```bash
git add .
git commit -m "update content"
git push
```

### Vercel のダッシュボードを確認する

- Vercel が自動でビルドを開始する
- 1〜2分後に本番 URL が更新される
- Deployments タブで最新のデプロイ状態を確認できる

---

# 後半90分 演習

---

## 推しページを作ってデプロイする

### テーマ

自分の「推し」を紹介するページを作る。
テーマは何でもよい。

```
例: アーティスト、映画、アニメ、ゲーム、食べ物、
    スポーツ選手、場所、ブランドなど
```

### 進め方

1. `md/profile/profile.md` を開いて手順を読む
2. `App.pdf` / `style.pdf` を開いてコードの全体像を確認する
3. `src/App.tsx` のデータ部分を自分の推し情報に書き換える
4. `src/style.css` にスタイルを写経する
5. ブラウザで確認する
6. push → Vercel の本番 URL で確認する
7. URL を提出する

### 書き換える場所

`src/App.tsx` の上部にある以下の部分だけ変更すればよい。
コンポーネントの中身は触らない。

```tsx
const oshi = {
  name: '推しの名前',
  catchcopy: 'キャッチコピー',
  description: '紹介文',
  imageUrl: '画像のURL',
  genre: 'ジャンル',
  since: '年',
};

const points = [...]; // 推しポイント3つ

const picks = [...];  // おすすめ作品・楽曲など
```

### 画像 URL の探し方

Wikipedia のページを開き、画像を右クリックして「画像アドレスをコピー」する。
または画像検索で見つけた画像の URL を使う。

### 詰まったら

Copilot Chat にエラーメッセージや状況をそのまま貼り付けて聞く。

### 提出物

- Vercel の本番 URL
