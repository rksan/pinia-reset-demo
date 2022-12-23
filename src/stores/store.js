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

    setName(name) {
      state.name = name;
      return this;
    },

    setAge(age) {
      state.age = age;
      return this;
    },
  };

  return {
    ...toRefs(readonly(state)),
    ...actions,
  };
});
