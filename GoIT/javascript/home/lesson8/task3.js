function User(fullName) {
    this.fullName = fullName;
    var splitName = this.fullName.split(' ');

    Object.defineProperties(this, {

            firstName: {
                get: function(){
                    return splitName[0];
                },

                set: function(firstName_new){
                    this.fullName = firstName_new + ' ' + this.lastName;
                }
            },

            lastName: {
                get: function(){
                    return splitName[1];
                },

                set: function(lastName_new){
                    this.fullName = this.firstName + ' ' + lastName_new;
                }
            }
        }
    );
}

var vasya = new User('Александр Пушкин');

console.log(vasya.fullName);
console.log(vasya.firstName);
console.log(vasya.lastName);

vasya.lastName = 'Толстой';
console.log(vasya.fullName);