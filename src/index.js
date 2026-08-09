import "./style.css";
// ─── ПЕРЕМЕННЫЕ
let current = "0";
let previous = null;
let operation = null;
let shouldReset = false;

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
  current = String(-parseFloat(current));
  updateDisplay();
}

// Нажата кнопка % — делим на 100
function pressPercent() {
  current = String(parseFloat(current) / 100);
  updateDisplay();
}

// Пользователь нажал одну из операций (+, -, ×, ÷)
function pressOperation(op) {
  previous = parseFloat(current);
  operation = op;
  shouldReset = true;
}

// Результат
function pressEquals() {
  // если ничего не нажато или 0, то... ничего
  if (!operation || previous === null) return;

  // выражение:
  const a = previous;
  const b = parseFloat(current);
  let result;
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
