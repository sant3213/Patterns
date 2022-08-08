**<font size="5">OOP</font>**
Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects.

It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

Organizes software design around data, or objects, rather than functions and logic.

 - **Structure:**
    - Classes
    - Objects
    - Methods
    - Attributes

 - **Main Principles** 
    - Encapsulation: Refers to the bundling of data, along with the methods that operate on that data, into a single unit. A class is an example of that. [See the example](./OOP/Principles/Encapsulation.ts.ts)

      Encapsulation may also refer to a mechanism of restricting the direct access to some components of an object. 
      *Benefits:* Hiding data, more flexibility, easy to reuse.

    - Abstraction
    - Inheritance
    - Polymorphism

**Abstract class**
 An abstract class allows you to create functionality that subclasses can implement or override.
 An abstract method is a method that is declared, but not implemented in the code.

 **Inheritance**
It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.
Extend existing classes to create new ones using inheritance.

Derived classes are often called subclasses, and base classes are often called superclasses.

In this [example](./POO/Inheritance/inheritance.ts) because Cat extends the functionality from Animal, we were able to create an instance of Dog that could both meow() and move().

This is a more complex scenario [example 2](./POO/Inheritance/inheritanceTwo.ts) where we see the extends keywords used to create two new subclasses of Animal: Horse and Snake.
 - Each derived class that contains a constructor function must call super() which will execute the constructor of the base class.
 - Before we ever access a property on this in a constructor body, we have to call **super()**. This is an important rule that TypeScript will enforce.
 - To override a method from the superClass (base class) 

**<font size="5">SOLID</font>**
* S: Single responsibility principle.
* O: Open–closed principle.
* L: Liskov substitution principle.
* I: Interface segregation principle.
* D: Dependency inversion principle.

**Single responsibility**
Every module, class or function should have one responsibility/purpose in a program. "Every class should have only one reason to change"


**Open-Closed Principle**
Classes, modules, functions should be open for extension but closed for modification ( no change in old code). The above approach is based on the premise that we should be able to introduce new features without changing the present code.  

Classes, functions or modules should be created in a way that their core functionalities can be extended to other entities without altering the initial entity's source code

**Liskov Substitution Principle**
Objects of a superclass should be able to be replaced with objects of subclasses without causing the application to break.

<hr/>

**<font size="5">Patterns</font>**

**<font size="4">Decorator Pattern</font>**
* **Type**: Structural design pattern.

* **Features:**
    - Aims to promote code reuse.
    - Adds behavior to existing classes in a system dynamically
    - Can be used to modify existing systems where we wish to add additional features to objects.
    - The Decorator pattern isn’t heavily tied to how objects are created but instead focuses on the problem of extending their functionality.
* **Why using it?**
    - Applications may contain features requiring a large quantity of distinct types of object.
    - The object constructors could represent distinct player types, each with differing capabilities.
    - Imagine having to create subclasses for each combination of capability type.

Coffee example from the book: "Head First Design Patterns by Freeman, Sierra and Bates"


What it does is to override the cost function of the superclass object MacBook() to add it the upgrade selected (memory, engraving, insurance).
[example](./Patterns/Decorator/Structural/Decorator/exampleOne.js)


**<font size="4">Facade Pattern</font>**
* **Type**: Creational Design Pattern.

**<font size="4">Factory Pattern</font>**
* **Type**: Creational Design Pattern.

* **Features:**
    - Simplifies object creation.
    - Provides a generic interface for creating objects.
    - Creating different objects based on need.
    - Repository Creation. I might have a user repository, a task repository, a project repository and we don´t want to have to pull all of those different repositories into my route, or my controller. So we can create a repository factory.
    

* **Why using it?**
    - The creation of an object can be sometimes complicated either because of configuration or other factors.

    In this [example](./Patterns/Design/Factory/exampleOneVehicle.js), our Factory class creates a new vehicle by instantiating the Car class or the Truck vehicle class using the new operator. We determine which class to instantiate using the vehicleType parameter. In cases like these where the class to instantiate depends on dynamic factors the factory pattern is particularly useful.