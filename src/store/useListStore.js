import { defineStore } from "pinia";
import { reactive, computed } from "vue";

import { useCounterStore } from "./useCounterStore"; // 引入其他仓库

export const useListStore = defineStore(
  "list",
  () => {
    //composition api式的代码风格

    const otherStore = useCounterStore(); //获取其他仓库

    //创建仓库数据，类似于state
    const list = reactive({
      items: [
        {
          text: "学习 Pinia",
          isCompleted: true,
        },
        {
          text: "打羽毛球",
          isCompleted: false,
        },
        {
          text: "玩游戏",
          isCompleted: true,
        },
      ],
      counter: 100,
    });

    //使用vue里面的计算属性来做getters
    const doubleCounter = computed(() => {
      return list.counter;
    });
    //该getters来自其他仓库
    const otherCounter = computed(() => {
      return otherStore.doubleCount;
    });

    //添加一个代办事项
    function addItem(newItem) {
      list.items.push({
        text: newItem,
        isCompleted: false,
      });
    }
    //改变代办事件的状态
    function completeHandle(index) {
      list.items[index].isCompleted = !list.items[index].isCompleted;
    }
    //删除指定的待办事件
    function deleteHandle(index) {
      list.items.splice(index, 1);
    }

    return {
      list,
      doubleCounter,
      addItem,
      completeHandle,
      deleteHandle,
      otherCounter,
    };
  },
  {
    persist: true,
  }
);
