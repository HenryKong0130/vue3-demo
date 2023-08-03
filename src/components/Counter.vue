<template>
  <div class="container">
    <!-- 第一组 -->
    <p class="group-title">普通增加</p>
    <div class="btn-group">
      <button
        class="btn"
        @click="increment"
      >-</button>
      <div class="num">{{ num }}</div>
      <button
        class="btn"
        @click="increment"
      >+</button>
    </div>
    <!-- 第二组 -->
    <p class="group-title">getters</p>
    <div class="btn-group">
      <button
        class="btn"
        @click="decrement"
      >-</button>
      <div class="num">{{ doubleCount }}</div>
      <button
        class="btn"
        @click="increment"
      >+</button>
    </div>

    <!-- 第三组 -->
    <p class="group-title">异步</p>
    <div class="btn-group">
      <button
        class="btn"
        @click="asyncDecrement"
      >-</button>
      <div class="num">{{ num }}</div>
      <button
        class="btn"
        @click="asyncIncrement"
      >+</button>
    </div>

    <!-- 第三组 -->
    <p class="group-title">重制</p>
    <div class="btn-group">
      <button
        class="btn"
        @click="store.$reset()"
      >重置</button>
    </div>

    <!-- 第四组 -->
    <p class="group-title">$patch方法</p>
    <div class="btn-group">
      <input
        type="text"
        class="numInput"
        v-model="numInput"
      >
      <button
        class="btn"
        @click="setHandle"
      >dispatch</button>
    </div>

  </div>
</template>

<script setup>
import { useCounterStore } from "@/store/useCounterStore.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const store = useCounterStore(); //拿到此仓库
const { increment, decrement, asyncIncrement, asyncDecrement } = store;
//拿到仓库中具有响应式的数据
const { num, doubleCount } = storeToRefs(store);
const numInput = ref("");

const setHandle = function () {
  store.$patch({
    num: numInput.value,
  });
  numInput.value = "";
};
</script>

<style scoped>
.container > .btn-group {
  /* outline: 1px solid red; */
  width: 280px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.num {
  font-size: 32px;
  font-weight: 300;
}
.btn {
  height: 30px;
  outline: none;
  font-size: 16px;
  font-weight: 100;
  cursor: pointer;
  padding: 0 10px;
}

.numInput {
  width: 200px;
  height: 30px;
  margin-right: 10px;
}

.group-title {
  text-align: center;
  margin-bottom: 0;
  font-weight: 200;
  font-size: 20px;
}
</style>