const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.state = PENDING;
    this.value = undefined; // 成功值
    this.reason = undefined; // 失败原因

    this.onFulfilledCallbacks = []; // 成功回调
    this.onRejectedCallbacks = []; // 失败回调

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn());
      }
    };

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.state === REJECTED) {
      onRejected(this.reason);
    }
    if (this.state === PENDING) {
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve('成功');
    reject('失败');
  }, 1000);
});
p.then(
  (res) => {
    console.log('res :>> ', res);
  },
  (err) => {
    console.error('err :>> ', err);
  }
);
