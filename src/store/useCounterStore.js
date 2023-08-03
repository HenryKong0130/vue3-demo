//仓库文件
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      num: 0,
    };
  },
  //针对上面的数据做一个二次计算
  //可以看作是计算属性
  getters: {
    doubleCount: (state) => state.num * 2,
  },

  actions: {
    //同步方法
    increment() {
      this.num++;
    },
    decrement() {
      this.num--;
    },
    //异步方法
    async asyncIncrement() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.increment();
    },
    async asyncDecrement() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.decrement();
    },
  },
  persist: true,
});
