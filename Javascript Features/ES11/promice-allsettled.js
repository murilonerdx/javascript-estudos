const promise1 = new Promise((resolve, reject) => {
    return setTimeout(() => resolve('Promise 1 resolvida'), 2000);
});

const promise2 = new Promise((resolve, reject) => {
    return setTimeout(() => resolve('Promise 2 resolvida'), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    return setTimeout(() => resolve('Promise 3 resolvida'), 2000);
});

const promises = [promise1, promise2, promise3];
Promise.allSettled(promises);