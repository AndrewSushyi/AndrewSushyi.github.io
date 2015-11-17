function CoffeeMachine(power, capacity) {
    var waterAmount=0;
    var machinePower=0;
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };
    this.getPower = function() {
        return machinePower;
    };

}
var CoffeeMachine1 = new CoffeeMachine(2, 200);
CoffeeMachine1.setWaterAmount(3);
console.log(CoffeeMachine1.getWaterAmount());