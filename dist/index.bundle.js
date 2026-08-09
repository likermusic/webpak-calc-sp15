"use strict";
(self["webpackChunklesson26_webpack"] = self["webpackChunklesson26_webpack"] || []).push([[57],{

/***/ 173
() {


// ─── ПЕРЕМЕННЫЕ
let current = "0"; // число на экране прямо сейчас
let previous = null; // число до того, как нажали операцию
let operation = null; // выбранная операция
let shouldReset = false; // true = следующая цифра начнёт новое число // false = цифра должна дописаться к текущему числу

// ─── ЭКРАН
const display = document.getElementById("display");

// Функция, которая обновляет текст на экране
function updateDisplay() {
  display.textContent = current;

  const length = current.length;

  if (length > 9) {
    display.style.fontSize = "32px";
  } else if (length > 6) {
    display.style.fontSize = "48px";
  } else {
    display.style.fontSize = "64px";
  }
}

// ─── ФУНКЦИИ
// ВВОД ЦИФР или запятой
function pressDigit(value) {
  // Если только что нажали операцию — начинаем новое число
  if (shouldReset) {
    if (value === ".") {
      current = "0.";
    } else {
      current = value;
    }

    shouldReset = false;
    updateDisplay();
    return;
  }

  // Нельзя поставить вторую точку
  if (value === "." && current.includes(".")) return;

  // Если на экране 0 и нажали точку
  if (value === "." && current === "0") {
    current = "0.";
    updateDisplay();
    return;
  }

  // Обычный ввод цифр
  if (current === "0") {
    current = value;
  } else {
    current = current + value;
  }

  updateDisplay();
}

// Нажата кнопка AC — сбрасываем всё до заводских настроек
function pressClear() {
  current = "0";
  previous = null;
  operation = null;
  shouldReset = false;
  updateDisplay();
}

// +/- — меняем знак числа
function pressSign() {
  current = String(-parseFloat(current)); // parseFloat(current) - возвращает число, -  знак, меняет число (было -25, будет -(-25), значит +25) и обратно в строку
  updateDisplay();
}

// Нажата кнопка % — делим на 100
function pressPercent() {
  current = String(parseFloat(current) / 100);
  updateDisplay();
}

// Пользователь нажал одну из операций (+, -, ×, ÷)
function pressOperation(op) {
  previous = parseFloat(current); // число на экране
  operation = op; // (+, -, ×, ÷)
  shouldReset = true; // после операции вводим новое число
}

// Результат
function pressEquals() {
  // если ничего не нажато или 0, то... ничего
  if (!operation || previous === null) return;

  // выражение:
  const a = previous;
  const b = parseFloat(current);
  let result; // здесь пока нет значения, потому что нет никаких расчетов
  // console.log(result);

  if (operation === "+") result = a + b;
  if (operation === "-") result = a - b;
  if (operation === "*") result = a * b;
  if (operation === "/") {
    if (b === 0) {
      current = "Error";
      updateDisplay();
      operation = null;
      previous = null;
      shouldReset = true;
      return;
    }
    result = a / b;
  }

  // Округляем до 10 знаков
  current = String(parseFloat(result.toFixed(10)));

  operation = null;
  previous = null;
  shouldReset = true;

  updateDisplay();
}

// ─── addEventListener
// На каждую кнопку свой обработчик клика

document.getElementById("btn-clear").addEventListener("click", pressClear);

document.getElementById("btn-sign").addEventListener("click", pressSign);

document.getElementById("btn-percent").addEventListener("click", pressPercent);

document.getElementById("btn-divide").addEventListener("click", function () {
  pressOperation("/");
});

document.getElementById("btn-7").addEventListener("click", function () {
  pressDigit("7");
});

document.getElementById("btn-8").addEventListener("click", function () {
  pressDigit("8");
});

document.getElementById("btn-9").addEventListener("click", function () {
  pressDigit("9");
});

document.getElementById("btn-multiply").addEventListener("click", function () {
  pressOperation("*");
});

document.getElementById("btn-4").addEventListener("click", function () {
  pressDigit("4");
});

document.getElementById("btn-5").addEventListener("click", function () {
  pressDigit("5");
});

document.getElementById("btn-6").addEventListener("click", function () {
  pressDigit("6");
});

document.getElementById("btn-minus").addEventListener("click", function () {
  pressOperation("-");
});

document.getElementById("btn-1").addEventListener("click", function () {
  pressDigit("1");
});

document.getElementById("btn-2").addEventListener("click", function () {
  pressDigit("2");
});

document.getElementById("btn-3").addEventListener("click", function () {
  pressDigit("3");
});

document.getElementById("btn-plus").addEventListener("click", function () {
  pressOperation("+");
});

document.getElementById("btn-0").addEventListener("click", function () {
  pressDigit("0");
});

document.getElementById("btn-dot").addEventListener("click", function () {
  pressDigit(".");
});

document.getElementById("btn-equals").addEventListener("click", pressEquals);


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(173));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQjtBQUNyQjtBQUNBLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXNzb24yNl93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbi8vIOKUgOKUgOKUgCDQn9CV0KDQldCc0JXQndCd0KvQlVxyXG5sZXQgY3VycmVudCA9IFwiMFwiOyAvLyDRh9C40YHQu9C+INC90LAg0Y3QutGA0LDQvdC1INC/0YDRj9C80L4g0YHQtdC50YfQsNGBXHJcbmxldCBwcmV2aW91cyA9IG51bGw7IC8vINGH0LjRgdC70L4g0LTQviDRgtC+0LPQviwg0LrQsNC6INC90LDQttCw0LvQuCDQvtC/0LXRgNCw0YbQuNGOXHJcbmxldCBvcGVyYXRpb24gPSBudWxsOyAvLyDQstGL0LHRgNCw0L3QvdCw0Y8g0L7Qv9C10YDQsNGG0LjRj1xyXG5sZXQgc2hvdWxkUmVzZXQgPSBmYWxzZTsgLy8gdHJ1ZSA9INGB0LvQtdC00YPRjtGJ0LDRjyDRhtC40YTRgNCwINC90LDRh9C90ZHRgiDQvdC+0LLQvtC1INGH0LjRgdC70L4gLy8gZmFsc2UgPSDRhtC40YTRgNCwINC00L7Qu9C20L3QsCDQtNC+0L/QuNGB0LDRgtGM0YHRjyDQuiDRgtC10LrRg9GJ0LXQvNGDINGH0LjRgdC70YNcclxuXHJcbi8vIOKUgOKUgOKUgCDQrdCa0KDQkNCdXHJcbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlcIik7XHJcblxyXG4vLyDQpNGD0L3QutGG0LjRjywg0LrQvtGC0L7RgNCw0Y8g0L7QsdC90L7QstC70Y/QtdGCINGC0LXQutGB0YIg0L3QsCDRjdC60YDQsNC90LVcclxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcclxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gY3VycmVudDtcclxuXHJcbiAgY29uc3QgbGVuZ3RoID0gY3VycmVudC5sZW5ndGg7XHJcblxyXG4gIGlmIChsZW5ndGggPiA5KSB7XHJcbiAgICBkaXNwbGF5LnN0eWxlLmZvbnRTaXplID0gXCIzMnB4XCI7XHJcbiAgfSBlbHNlIGlmIChsZW5ndGggPiA2KSB7XHJcbiAgICBkaXNwbGF5LnN0eWxlLmZvbnRTaXplID0gXCI0OHB4XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpc3BsYXkuc3R5bGUuZm9udFNpemUgPSBcIjY0cHhcIjtcclxuICB9XHJcbn1cclxuXHJcbi8vIOKUgOKUgOKUgCDQpNCj0J3QmtCm0JjQmFxyXG4vLyDQktCS0J7QlCDQptCY0KTQoCDQuNC70Lgg0LfQsNC/0Y/RgtC+0LlcclxuZnVuY3Rpb24gcHJlc3NEaWdpdCh2YWx1ZSkge1xyXG4gIC8vINCV0YHQu9C4INGC0L7Qu9GM0LrQviDRh9GC0L4g0L3QsNC20LDQu9C4INC+0L/QtdGA0LDRhtC40Y4g4oCUINC90LDRh9C40L3QsNC10Lwg0L3QvtCy0L7QtSDRh9C40YHQu9C+XHJcbiAgaWYgKHNob3VsZFJlc2V0KSB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiLlwiKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBcIjAuXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkUmVzZXQgPSBmYWxzZTtcclxuICAgIHVwZGF0ZURpc3BsYXkoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vINCd0LXQu9GM0LfRjyDQv9C+0YHRgtCw0LLQuNGC0Ywg0LLRgtC+0YDRg9GOINGC0L7Rh9C60YNcclxuICBpZiAodmFsdWUgPT09IFwiLlwiICYmIGN1cnJlbnQuaW5jbHVkZXMoXCIuXCIpKSByZXR1cm47XHJcblxyXG4gIC8vINCV0YHQu9C4INC90LAg0Y3QutGA0LDQvdC1IDAg0Lgg0L3QsNC20LDQu9C4INGC0L7Rh9C60YNcclxuICBpZiAodmFsdWUgPT09IFwiLlwiICYmIGN1cnJlbnQgPT09IFwiMFwiKSB7XHJcbiAgICBjdXJyZW50ID0gXCIwLlwiO1xyXG4gICAgdXBkYXRlRGlzcGxheSgpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8g0J7QsdGL0YfQvdGL0Lkg0LLQstC+0LQg0YbQuNGE0YBcclxuICBpZiAoY3VycmVudCA9PT0gXCIwXCIpIHtcclxuICAgIGN1cnJlbnQgPSB2YWx1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudCA9IGN1cnJlbnQgKyB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8g0J3QsNC20LDRgtCwINC60L3QvtC/0LrQsCBBQyDigJQg0YHQsdGA0LDRgdGL0LLQsNC10Lwg0LLRgdGRINC00L4g0LfQsNCy0L7QtNGB0LrQuNGFINC90LDRgdGC0YDQvtC10LpcclxuZnVuY3Rpb24gcHJlc3NDbGVhcigpIHtcclxuICBjdXJyZW50ID0gXCIwXCI7XHJcbiAgcHJldmlvdXMgPSBudWxsO1xyXG4gIG9wZXJhdGlvbiA9IG51bGw7XHJcbiAgc2hvdWxkUmVzZXQgPSBmYWxzZTtcclxuICB1cGRhdGVEaXNwbGF5KCk7XHJcbn1cclxuXHJcbi8vICsvLSDigJQg0LzQtdC90Y/QtdC8INC30L3QsNC6INGH0LjRgdC70LBcclxuZnVuY3Rpb24gcHJlc3NTaWduKCkge1xyXG4gIGN1cnJlbnQgPSBTdHJpbmcoLXBhcnNlRmxvYXQoY3VycmVudCkpOyAvLyBwYXJzZUZsb2F0KGN1cnJlbnQpIC0g0LLQvtC30LLRgNCw0YnQsNC10YIg0YfQuNGB0LvQviwgLSAg0LfQvdCw0LosINC80LXQvdGP0LXRgiDRh9C40YHQu9C+ICjQsdGL0LvQviAtMjUsINCx0YPQtNC10YIgLSgtMjUpLCDQt9C90LDRh9C40YIgKzI1KSDQuCDQvtCx0YDQsNGC0L3QviDQsiDRgdGC0YDQvtC60YNcclxuICB1cGRhdGVEaXNwbGF5KCk7XHJcbn1cclxuXHJcbi8vINCd0LDQttCw0YLQsCDQutC90L7Qv9C60LAgJSDigJQg0LTQtdC70LjQvCDQvdCwIDEwMFxyXG5mdW5jdGlvbiBwcmVzc1BlcmNlbnQoKSB7XHJcbiAgY3VycmVudCA9IFN0cmluZyhwYXJzZUZsb2F0KGN1cnJlbnQpIC8gMTAwKTtcclxuICB1cGRhdGVEaXNwbGF5KCk7XHJcbn1cclxuXHJcbi8vINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdCw0LbQsNC7INC+0LTQvdGDINC40Lcg0L7Qv9C10YDQsNGG0LjQuSAoKywgLSwgw5csIMO3KVxyXG5mdW5jdGlvbiBwcmVzc09wZXJhdGlvbihvcCkge1xyXG4gIHByZXZpb3VzID0gcGFyc2VGbG9hdChjdXJyZW50KTsgLy8g0YfQuNGB0LvQviDQvdCwINGN0LrRgNCw0L3QtVxyXG4gIG9wZXJhdGlvbiA9IG9wOyAvLyAoKywgLSwgw5csIMO3KVxyXG4gIHNob3VsZFJlc2V0ID0gdHJ1ZTsgLy8g0L/QvtGB0LvQtSDQvtC/0LXRgNCw0YbQuNC4INCy0LLQvtC00LjQvCDQvdC+0LLQvtC1INGH0LjRgdC70L5cclxufVxyXG5cclxuLy8g0KDQtdC30YPQu9GM0YLQsNGCXHJcbmZ1bmN0aW9uIHByZXNzRXF1YWxzKCkge1xyXG4gIC8vINC10YHQu9C4INC90LjRh9C10LPQviDQvdC1INC90LDQttCw0YLQviDQuNC70LggMCwg0YLQvi4uLiDQvdC40YfQtdCz0L5cclxuICBpZiAoIW9wZXJhdGlvbiB8fCBwcmV2aW91cyA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAvLyDQstGL0YDQsNC20LXQvdC40LU6XHJcbiAgY29uc3QgYSA9IHByZXZpb3VzO1xyXG4gIGNvbnN0IGIgPSBwYXJzZUZsb2F0KGN1cnJlbnQpO1xyXG4gIGxldCByZXN1bHQ7IC8vINC30LTQtdGB0Ywg0L/QvtC60LAg0L3QtdGCINC30L3QsNGH0LXQvdC40Y8sINC/0L7RgtC+0LzRgyDRh9GC0L4g0L3QtdGCINC90LjQutCw0LrQuNGFINGA0LDRgdGH0LXRgtC+0LJcclxuICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICBpZiAob3BlcmF0aW9uID09PSBcIitcIikgcmVzdWx0ID0gYSArIGI7XHJcbiAgaWYgKG9wZXJhdGlvbiA9PT0gXCItXCIpIHJlc3VsdCA9IGEgLSBiO1xyXG4gIGlmIChvcGVyYXRpb24gPT09IFwiKlwiKSByZXN1bHQgPSBhICogYjtcclxuICBpZiAob3BlcmF0aW9uID09PSBcIi9cIikge1xyXG4gICAgaWYgKGIgPT09IDApIHtcclxuICAgICAgY3VycmVudCA9IFwiRXJyb3JcIjtcclxuICAgICAgdXBkYXRlRGlzcGxheSgpO1xyXG4gICAgICBvcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICBwcmV2aW91cyA9IG51bGw7XHJcbiAgICAgIHNob3VsZFJlc2V0ID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0ID0gYSAvIGI7XHJcbiAgfVxyXG5cclxuICAvLyDQntC60YDRg9Cz0LvRj9C10Lwg0LTQviAxMCDQt9C90LDQutC+0LJcclxuICBjdXJyZW50ID0gU3RyaW5nKHBhcnNlRmxvYXQocmVzdWx0LnRvRml4ZWQoMTApKSk7XHJcblxyXG4gIG9wZXJhdGlvbiA9IG51bGw7XHJcbiAgcHJldmlvdXMgPSBudWxsO1xyXG4gIHNob3VsZFJlc2V0ID0gdHJ1ZTtcclxuXHJcbiAgdXBkYXRlRGlzcGxheSgpO1xyXG59XHJcblxyXG4vLyDilIDilIDilIAgYWRkRXZlbnRMaXN0ZW5lclxyXG4vLyDQndCwINC60LDQttC00YPRjiDQutC90L7Qv9C60YMg0YHQstC+0Lkg0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsFxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2xlYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXNzQ2xlYXIpO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc2lnblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJlc3NTaWduKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXBlcmNlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXNzUGVyY2VudCk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1kaXZpZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBwcmVzc09wZXJhdGlvbihcIi9cIik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tN1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHByZXNzRGlnaXQoXCI3XCIpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLThcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBwcmVzc0RpZ2l0KFwiOFwiKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi05XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgcHJlc3NEaWdpdChcIjlcIik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tbXVsdGlwbHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBwcmVzc09wZXJhdGlvbihcIipcIik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tNFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHByZXNzRGlnaXQoXCI0XCIpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLTVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBwcmVzc0RpZ2l0KFwiNVwiKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi02XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgcHJlc3NEaWdpdChcIjZcIik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tbWludXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBwcmVzc09wZXJhdGlvbihcIi1cIik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHByZXNzRGlnaXQoXCIxXCIpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBwcmVzc0RpZ2l0KFwiMlwiKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi0zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgcHJlc3NEaWdpdChcIjNcIik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcGx1c1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHByZXNzT3BlcmF0aW9uKFwiK1wiKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi0wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgcHJlc3NEaWdpdChcIjBcIik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tZG90XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgcHJlc3NEaWdpdChcIi5cIik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tZXF1YWxzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmVzc0VxdWFscyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==