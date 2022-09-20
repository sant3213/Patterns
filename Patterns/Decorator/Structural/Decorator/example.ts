// var User = function (name) {
//     this.name = name;

//     this.say = function () {
//         console.log("User: " + this.name);
//     };
// }

// var DecoratedUser = function (user, street, city) {
//     this.user = user;
//     this.name = user.name;  // ensures interface stays the same
//     this.street = street;
//     this.city = city;

//     this.say = function () {
//         console.log("Decorated User: " + this.name + ", " +
//             this.street + ", " + this.city);
//     };
// }

// function run() {

//     var user = new User("Kelly");
//     user.say();

//     var decorated = new DecoratedUser(user, "Broadway", "New York");
//     decorated.say();
// }

/*
    User: Kelly
    Decorated User: Kelly, Broadway, New York
*/


interface IUser {
    name: string;

    say(): string;
}

class UserComponent implements IUser {
    
    name= "Sant";

    say(): string {
        return "User: " + this.name;
    }
}

class DecoratedUser implements IUser {
    #object: IUser;
    name: string;

    constructor(object: IUser) {
        this.#object = object
        this.name = object.name;
    }

    say(): string {
        return `Decorator Method(${this.#object.say()})`
    }
}

// The Client
const user = new UserComponent();
console.log(user.say());

// The component can be decorated
user.name = "Andrew";
const decoratedUser1 = new DecoratedUser(user);
console.log(decoratedUser1.say());

// The decorated component can be decorated again
decoratedUser1.name ="Andrew";
const decoratedUser2 = new DecoratedUser(decoratedUser1);
decoratedUser2.name = "Andrew";
console.log(decoratedUser2.say());