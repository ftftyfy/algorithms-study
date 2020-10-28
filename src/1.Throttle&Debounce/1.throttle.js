function throttle1(func, delay) {
  let prev = Date.now();
  return function (...args) {
    const now = Date.now();
    if (now - prev >= delay) {
      func.apply(this, args);
      prev = now;
    }
  };
}

function throttle2(func, delay) {
  let timeout = null;
  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(this, args);
      }, delay);
    }
  };
}

function handle() {
  console.log(Math.random());
}

window.addEventListener("scroll", throttle1(handle, 1000));
window.addEventListener("scroll", throttle2(handle, 1000));
