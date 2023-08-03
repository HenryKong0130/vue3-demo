<template>
  <div class="container">
    <div class="input-container">
      <p class="numInput">自己仓库的Getter数据：{{ doubleCounter }}</p>
      <button
        class="btn"
        @click="list.counter++"
      >+1</button>
    </div>
    <div class="input-container">
      <p class="numInput">其他仓库的Getter数据：{{ otherCounter }}</p>
    </div>

    <!-- 重置待办事项 -->
    <div class="input-container">
      <button
        class="ctm"
        @click="store.reset"
      >重置待办事项</button>
    </div>

    <!-- 添加新的待办事项 -->
    <div class="input-container">
      <input
        type="text"
        class="numInput"
        v-model="newItem"
      />
      <button
        class="btn"
        @click="addHandle"
      >添加</button>
    </div>
    <!-- 待办事项列表 -->
    <div class="list">
      <div
        v-for="(it, index) in list.items"
        :key="index"
        class="item"
      >
        <!-- 内容 -->
        <div
          :class="it.isCompleted ? 'del' : ''"
          @click="completeHandle(index)"
        >
          {{ it.text }}
        </div>
        <!-- 删除 -->
        <div
          class="close"
          @click="deleteHandle(index)"
        >X</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useListStore } from "@/store/useListStore.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const store = useListStore();
// console.log("List",store.secret);
// console.log("List",store.test);
// console.log("List",store.name);

// const {list} = store
// console.log(list);

const { list, doubleCounter, otherCounter } = storeToRefs(store); //从仓库中解构响应式数据
const { addItem, completeHandle, deleteHandle } = store; // 从仓库中解构方法
const newItem = ref(""); //与输入框做双向绑定

//添加新的待办事项
function addHandle() {
  if (newItem.value) {
    addItem(newItem.value);
    newItem.value = "";
  } else {
    alert("请添加待办事项");
  }
}
</script>

<style scoped>
.container {
  width: 300px;
  /* outline: 1px solid blue; */
  margin: 20px auto;
}
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* outline: 1px solid; */
}
.numInput {
  width: 75%;
  height: 30px;
}
.btn {
  width: 20%;
  cursor: pointer;
}
.list {
  margin-top: 20px;
}
.item {
  /* outline: 1px solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  font-size: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.close {
  width: 20px;
  height: 20px;
  /* border: 1px solid; */
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  background-color: rgb(243, 83, 83);
  color: #fff;
  font-weight: 400;
  cursor: pointer;
}

.del {
  text-decoration: line-through;
}

.ctm {
  margin-bottom: 15px;
}
</style>