function f() {
  alert( "Привет" );
}

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

f.defer(1000);