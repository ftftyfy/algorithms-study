function debounce(func, delay) {
  let timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(func, delay);
  };
}

function handle() {
  console.log(Math.random());
}

window.addEventListener("scroll", debounce(handle, 1000));
