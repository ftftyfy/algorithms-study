function debounce(func, delay) {
  let timeout = null;
  return function (...args) {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function handle() {
  console.log(Math.random());
}

window.addEventListener("scroll", debounce(handle, 1000));
