const button = document.querySelector('#hello-button');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
  message.textContent = '做得好！你刚刚运行了仓库中的 JavaScript。';
});
