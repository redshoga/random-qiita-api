# qiita-random-api

Qiitaの最新の10000件の記事からランダムでURLを取得するAPI

# エンドポイント

```bash
curl https://us-central1-random-qiita-api-be836.cloudfunctions.net/get
```

# ウェブサイト

https://random-qiita-api-be836.firebaseapp.com/

# ブックマークレット

以下をブックマークのURLとして設定すれば、ブックマークをクリックするとランダムなQiitaの記事にとべる

```javascript
javascript:r=new XMLHttpRequest();r.open("get","https://us-central1-random-qiita-api-be836.cloudfunctions.net/get",!0);r.onload=()=>location.href=JSON.parse(r.responseText).url;r.send()
```

# デプロイ方法

1. 最新のQiitaの記事のURLを集めたJSONをセットする

```bash
cd set-qiita-urls
npm install
cd ..

export TOKEN=<your-qiita-token>
node set-qiita-urls
```

2. Firebaseにデプロイ

```bash
firebase deploy
```
