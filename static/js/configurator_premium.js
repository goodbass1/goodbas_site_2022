// *** КАЛЬКУЛЯТОР ***

// КОНСТАНТЫ
let START_PRICE = 1380  // Start value for price

// Определить событие на чек-боксы опций и заполнить их, сразу пересчитать СУММУ
document.querySelectorAll('.counter-check').forEach((Element)=>{
  Element.onclick = calculateSumm;
  Element.checked = true;
  calculateSumm();
});

function calculateSumm() {  // Подсчитывает СУММУ и выводит в надпись результат
  // инициализация переменной СУММЫ
  let totalPrice = START_PRICE
  
  // Перебрать все чек-боксы и, если они отмечены, включить их value в СУММУ
  document.querySelectorAll('.counter-check').forEach((Element)=>{  
    if(Element.checked){
      totalPrice += +Element.value;
    }
  });

  // Вывод СУММЫ в поле суммы
  document.querySelector('.summ').innerHTML = totalPrice + " 000 РУБЛЕЙ";

  return
};
// *** КОНЕЦ КАЛЬКУЛЯТОР ***


// *** ОТДЕЛКА**

// Определить событие на все радиокнопки видов отделки в виде
// функций, меняющих список классов
document.getElementById('auto-picture-infinity').onclick = function() {
  document.getElementById('counter-pic').classList = 'counter-pic counter-pic_background-infinity';
};
document.getElementById('auto-picture-lattice').onclick = function() {
  document.getElementById('counter-pic').classList = 'counter-pic counter-pic_background-lattice';
};
document.getElementById('auto-picture-overflow').onclick = function() {
  document.getElementById('counter-pic').classList = 'counter-pic counter-pic_background-overflow';
};

// Первую радиокнопку нажать
document.getElementById('auto-picture-infinity').checked = true

// *** КОНЕЦ ОТДЕЛКА ***


// *** ЗАПОЛНЕНИЕ ПОЛЕЙ ФОРМЫ ***

document.getElementById('6m').onclick = function() {
  document.getElementById('choice').value="6 метров комплектации Премиум";
};

document.getElementById('7m').onclick = function() {
  document.getElementById('choice').value="7 метров комплектации Премиум";
};

document.getElementById('8m').onclick = function() {
  document.getElementById('choice').value="8 метров комплектации Премиум";
};

document.getElementById('9m').onclick = function() {
  document.getElementById('choice').value="9 метров комплектации Премиум";
};

// *** КОНЕЦ ЗАПОЛНЕНИЕ ПОЛЕЙ ФОРМЫ ***


