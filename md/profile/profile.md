# 推しページ

## テーマ

自分の「推し」を紹介する1ページを作り、Vercel でデプロイする。

## 書き換える場所

`src/App.tsx` の上部、コメントで囲まれたデータ部分だけ変更する。

### oshi オブジェクト

```tsx
const oshi = {
  name: '推しの名前',
  catchcopy: 'キャッチコピー（一言で魅力を表す）',
  description: '紹介文（3〜5文程度）',
  imageUrl: '画像のURL（なければ空文字 "" のままでよい）',
  genre: 'ジャンル（例: J-Rock / 映画 / アニメ）',
  since: '活動開始年や公開年',
};
```

### points 配列

推しポイントを3つ書く。

```tsx
const points = [
  { label: '項目名', text: '説明文' },
  { label: '項目名', text: '説明文' },
  { label: '項目名', text: '説明文' },
];
```

### picks 配列

おすすめ作品・楽曲・シーンなどを4つ書く。

```tsx
const picks = [
  { title: 'タイトル', year: '年', note: 'コメント' },
  { title: 'タイトル', year: '年', note: 'コメント' },
  { title: 'タイトル', year: '年', note: 'コメント' },
  { title: 'タイトル', year: '年', note: 'コメント' },
];
```

## 確認ポイント

- ブラウザで表示が崩れていないか
- 画像が表示されているか（URL が正しいか）
- テキストに誤字がないか
- push 後に Vercel で更新されているか

## 完成品

- `App.pdf` / `style.pdf` を参照
