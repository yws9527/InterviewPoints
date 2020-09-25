// 1. 深拷贝
const obj = {
  a: 10,
  b: {
    x: 20,
  },
  c: [30, 40],
  d: function () {
    console.log('深拷贝测试');
  }
}

/**
 * 深拷贝实现
 * @param {*} obj 
 */
function deepClone (obj) {
  let result
  // 1. 函数类型 值类型 或者 null 直接返回
  if (typeof obj !== 'object' || obj === null ) return obj;
  // 2. 区分对象或者数组
  result = obj instanceof Array ? [] : {};
  // 3. 递归赋值
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

const obj1 = deepClone(obj);
console.log(obj, obj1);

// 2. 实现函数防抖
function debounce (fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  }
}

const input = document.getElementById('debounce');
input.addEventListener('keyup', debounce(function (event) {
  console.log(event.target.value);
}))

// 3. 实现函数节流
function throttle (fn, delay = 100) {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  }
}

const div = document.getElementById('throttle');
div.addEventListener('drag', throttle(function (event) {
  console.log(event.offsetX, event.offsetY,);
}, 200))

// 4. 一个题目 实现 obj == 1 && obj == 2 && obj == 3
/**
 * 实现 obj == 1 && obj == 2 && obj == 3
 */
const obj2 = {
  val: 0,
  valueOf: function () {
    return ++this.val;
  }
}

console.log(obj2 == 1 && obj2 == 2 && obj2 == 3);

