import calc from "./calc.js";

self.addEventListener('message', function (event) {
  // получаем сообщение от main скрипта
  console.log(event.data);

  // отправляем сообщение в main скрипт
  self.postMessage({
    message: 'вычислено в воркере:',
    value: calc()
  });
});
