function NamedOne(first, last) {
  var self = this;
  Object.defineProperty(self, 'fullName', {
    get: function() {return self.firstName + ' ' + self.lastName;},
    set: function(full) {
      full = full.split(' ');
      if(full.length == 2) {
        self.firstName = full[0];
        self.lastName = full[1];
      }
    }
  });
  this.fullName = first + ' ' + last;
}