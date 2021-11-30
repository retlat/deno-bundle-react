Deno で React 使ったコードがビルドできるかテスト

Transpile and bundle
```sh
deno run --allow-read=src --allow-write=. --allow-net=esm.sh,cdn.esm.sh --unstable build.js
```

Transpile and bundle, minify by terser
```sh
deno run --allow-read=src --allow-write=. --allow-net=esm.sh,cdn.esm.sh --unstable build.minify.js
```

ライセンスの表示をどうするかが課題
