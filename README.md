# Split My Receipt Up API仕様書（swagger docs）

※ [English README.md is here！](/README-english.md)👈

OpenAI の OCR でレシートを読み取り、割り勘を計算するアプリ（[PerryM123/memories_backend](https://github.com/PerryM123/memories_backend)）の API仕様書です。

## API仕様書 

- [API仕様書: github pages](https://github.com/PerryM123/split-my-receipt-up-swagger-doc/deployments/github-pages)

## ローカル環境

```sh
$ ssh git@github.com:PerryM123/split-my-receipt-up-swagger-doc.git
$ cd split-my-receipt-up-swagger-doc
$ yarn
$ yarn dev
```

## 関連リポジトリ

### バックエンド側

- [PerryM123/memories_backend](https://github.com/PerryM123/memories_backend)

### フロントエンド側

- [PerryM123/split-my-receipt-up-frontend](https://github.com/PerryM123/split-my-receipt-up-frontend)

### MOCK環境

OpenAI API を利用するとトークンがかかるので動作確認用のモック環境を用意しました。

- [PerryM123/OpenAI API Mock Environment (Split My Receipt Up)](https://github.com/PerryM123/open-ai-api-mock-environment)
