"use strict";
function storeCarInfo(manufacturer, model, ...args) {
    const carInfo = {
        manufacturer,
        model,
    };
    for (const [key, value] of args) {
        carInfo[key] = value;
    }
    return carInfo;
}
const cars1 = storeCarInfo("Toyota", "Camry", ["color", "blue"], ["year", 2023], ["features", ["GPS", "Bluetooth"]]);
console.log(cars1);
