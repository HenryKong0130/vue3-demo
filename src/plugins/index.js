//插件

/**
 * 创建一个深拷贝的方法
 * @param {*} obj
 */
function deepClone(obj) {
  // 如果传入的参数不是对象，则直接返回该参数
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  // 根据传入的参数是数组还是对象来初始化新的变量
  const newObj = Array.isArray(obj) ? [] : {};
  // 递归遍历原始对象并复制属性和值到新对象中
  for (const key in obj) {
    newObj[key] = deepClone(obj[key]);
  }
  // 返回新对象
  return newObj;
}

// 创建的每个 store 中都会添加一个名为 `secret` 的属性。
// 在安装此插件后，插件可以保存在不同的文件中
export function myPiniaPlugin1() {
  //给所有的store添加了一个全局属性
  return { secret: "use plugin successfully" };
}

export function myPiniaPlugin2(context) {
  //给所有的store添加了一个全局属性
  const { store } = context;
  store.test = "添加一个test属性";
}

/**
 * 给指定的store添加插件
 * @param {*} param0
 * @returns
 */
export function myPiniaPlugin3({ store }) {
  if (store.$id === "counter") {
    return { name: "给指定的store使用插件" };
  }
}

/**
 * 重置仓库状态
 * @param {*} param0
 */
export function myPiniaPlugin4({ store }) {
  //先将初试状态深拷贝一份
  const state = deepClone(store.$state);
  store.reset = () => {
    store.$patch(deepClone(state));
  };
}
