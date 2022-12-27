<html lang="ja">

# pinia-reset-demo

- readonly な state を持つ store を定義した場合、$reset() が動作しない問題に対処

## デモページ

About にあります

## サンプルコード

※ 重要な部分のみ抜粋

### `./store/store.js`

```javascript
import { reactive, readonly, toRefs } from "vue";
import { defineStore } from "pinia";
import cloneDeep from "lodash.clonedeep";

export const useSampleStore = defineStore("sample-store", () => {
  const target = {
    name: "taro",
    age: 18,
  };

  const state = reactive({ ...cloneDeep(target) });

  const actions = {
    reset() {
      Object.assign(state, { ...cloneDeep(target) });
      return this;
    },
    // ...
  };

  return {
    ...toRefs(readonly(state)),
    ...actions,
  };
});
```

</html>
