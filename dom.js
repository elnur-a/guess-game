"use strict";

console.log("gggo");

const fahrenheit = document.querySelector(".fahrenheit");
const celsius = document.querySelector(".celsius");
// const calculator = document.querySelector(".calculator");
const restartBtn = document.querySelector(".restart");

// functions
const converTemperature = (type, degree) => {
  let shortValue;
  if (type.toLowerCase() === "f") {
    shortValue = ((degree - 32) * (5 / 9)).toFixed(1);
  } else if (type.toLowerCase() === "c") {
    shortValue = (degree * 1.8 + 32).toFixed(1);
  }
  return parseFloat(shortValue);
};

const restartHandler = () => {
  fahrenheit.value = "";
  celsius.value = "";
};

celsius.addEventListener("input", () => {
  fahrenheit.value = converTemperature("c", celsius.value);
});

fahrenheit.addEventListener("input", () => {
  celsius.value = converTemperature("f", fahrenheit.value);
});

restartBtn.addEventListener("click", restartHandler);

// calculator.addEventListener("input", () => {
//   if (fahrenheit.value !== "") {
//     let celsiusTemp = (parseFloat(fahrenheit.value) - 32) * (5 / 9);
//     celsius.value = parseFloat(celsiusTemp.toFixed(1));
//   } else {
//     let fahrTemp = parseFloat(celsius.value) * 1.8 + 32;
//     fahrenheit.value = parseFloat(fahrTemp.toFixed(1));
//   }
// });
