import calc from './calc.js';

const btnMain = document.querySelector('.btn--main');
const btnWorker = document.querySelector('.btn--worker');

btnMain.addEventListener('click', () => {
  console.log('вычислено в основном потоке:', calc());
});

// Веб-воркеры начинают выполнение после того, как получат сообщение!
const worker = new Worker('webworker.js', { type: 'module' }); // type: 'module' нужен чтобы использвать import/export

// получаем сообщения от воркера
worker.addEventListener('message', function (event) {
  console.log(event.data.message, event.data.value);
});

btnWorker.addEventListener('click', () => {
  worker.postMessage('запуск вычисления в воркере..'); // отправляем воркеру сообщение
});
