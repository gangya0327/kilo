function isFunction(fun) {
  // return typeof fun === 'function';
  return Object.prototype.toString.call(fun) === '[object Function]';
}

function isObject(obj) {
  // return typeof fun === 'object'; // 不准确
  return Object.prototype.toString.call(obj) === '[object Object]';
}

// 定义 Promise A+ 规范中的三种状态
const PENDING_STATE = 'pending';
const FULFILLED_STATE = 'fulfilled';
const REJECTED_STATE = 'rejected';

// Promise 构造器
function MiaoPromise(fun) {
  // 发布订阅模式
  this.onFulfilledCallbacks = []; // 成功后的回调
  this.onRejectedCallbacks = []; // 失败后的回调

  this.state = PENDING_STATE;
  this.value = void 0; // 保存成功或失败的值

  // 定义 resolve 函数
  // const resolve = function (value) {
  const resolve = (value) => {
    resolutionProcedure(this, value);
  };

  const resolutionProcedure = function (promise, x) {
    // 判断是否是自身
    if (promise === x) {
      return reject(new TypeError('The promise and the value refer to the same object'));
    }
    // 判断是否是 promise，从 MiaoPromise 实例化来的
    if (x instanceof MiaoPromise) {
      return x.then(resolve, reject);
    }
    // 将状态从 pending 改为 fulfilled，表示执行完成
    if (promise.state === PENDING_STATE) {
      promise.state = FULFILLED_STATE;
      promise.value = x;
      // 发布
      promise.onFulfilledCallbacks.forEach((callback) => {
        callback(x);
      });
    }
  };

  // 定义 reject 函数
  const reject = (reason) => {
    // 将状态从 pending 改为 rejected
    if (this.state === PENDING_STATE) {
      this.state = REJECTED_STATE;
      this.value = reason;
      // 发布
      this.onRejectedCallbacks.forEach((callback) => {
        callback(reason);
      });
    }
  };

  fun(resolve, reject);
}

MiaoPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled && this.onFulfilledCallbacks.push(onFulfilled);
  onRejected && this.onRejectedCallbacks.push(onRejected);
  // 支持链式调用
  return this;
};

const pm = new MiaoPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
    // reject('fail');
  }, 800);
});
pm.then(
  (res) => {
    console.log('res :>> ', res);
  },
  (err) => {
    console.error('err :>> ', err);
  }
);
