function storeCarInfo(manufacturer: string, model: string, ...args: [string, any][]): any {
    const carInfo: any = {
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
