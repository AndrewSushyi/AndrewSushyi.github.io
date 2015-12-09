var MyNamespace;

MyNamespace.MyClass = function(msg) {
  this.msg = msg;
  this.sayHello = function() {
    return this.msg;
  };
};