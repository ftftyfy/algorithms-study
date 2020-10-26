function throttle(func, delay) {
  let prev = Date.now();
  return function (...args) {
    const now = Date.now();
    if (now - prev >= delay) {
      func.apply(this, args);
      prev = now;
    }
  };
}

function handle() {
  console.log(Math.random());
}

window.addEventListener("scroll", throttle(handle, 1000));
