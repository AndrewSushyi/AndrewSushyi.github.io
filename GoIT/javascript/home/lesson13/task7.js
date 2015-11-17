function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;
    var timerId;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        alert('Кофе готов!');
    }

    var parentDisable = this.disable;
    this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
    };

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }
        timerId = setTimeout(onReady, 1000);
    };

}



function Fridge(power) {
    // унаследовать
    Machine.apply(this, arguments);

    var food = []; // приватное свойство food

    this.addFood = function() {
        if (!this._enabled) {
            throw new Error("Холодильник выключен");
        }
        if (food.length + arguments.length >= this._power / 100) {
            throw new Error("Нельзя добавить, не хватает мощности");
        }
        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]); // добавить всё из arguments
        }
    };

    this.getFood = function() {
        // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
        return food.slice();
    };

}


var fridge = new Fridge(200);




fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье