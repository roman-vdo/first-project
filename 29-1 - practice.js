"use strict";

// Место для первой задачи
function calculateVolumeAndArea(lengthCube) {
    const cubeVolume = lengthCube * lengthCube * lengthCube,
          cubeArea = 6 * lengthCube * lengthCube;
    if (lengthCube <= 0 || typeof(lengthCube) !== "number"  || !Number.isInteger(lengthCube)) {
        return `При вычислении произошла ошибка`;
    } else {
        return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
    }
}
calculateVolumeAndArea(15.5);

// Место для второй задачи
function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) == "number" && seatNumber > 0 && seatNumber < 37 && Number.isInteger(seatNumber)) {
        const coupeNumber = Math.ceil(seatNumber / 4);
        return coupeNumber;
    } else if (typeof(seatNumber) !== "number" || !Number.isInteger(seatNumber) || seatNumber < 0) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (seatNumber > 36 || seatNumber === 0) {
        console.log("Таких мест в вагоне не существует");
        return "Таких мест в вагоне не существует";
    }
}

getCoupeNumber(0);