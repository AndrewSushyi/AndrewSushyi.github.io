var head = {
  glasses: 1
};

var table = {
  __proto__: head,
  pen: 3
};

var bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

var pockets = {
  __proto__: bed,
  money: 2000
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined