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
    - Encapsulation: Refers to the bundling of data, along with the methods that operate on that data, into a single unit. A class is an example of that. [See the example](./OOP/Principles/Encapsulation/Encapsulation.ts)

      Encapsulation may also refer to a mechanism of restricting the direct access to some components of an object. 
      *Benefits:* Hiding data, more flexibility, easy to reuse.

    - Abstraction
    - Inheritance
    - Polymorphism

**Abstract class**
 The main idea is to reuse behavior.
 An abstract class allows you to create functionality that subclasses can implement or override.
 Allows hiding the internal details and displaying only the functionality to the users.
 An abstract method is a method that is declared, but not implemented in the code.
 Abstract classes start hierarchies.
 They can have state and behavior.
 It is no possible to create an object from an abstract class.
 The idea is starting hierarchies but not be able to create instances.
 Methods with implementation are allowed

  [See the example](./OOP/Abstract%20class/abstract.ts)

 **Inheritance**
It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.
Extend existing classes to create new ones using inheritance.

An interface is not a class.
It helps us to start classes hierarchies.
A class can implements many interfaces, but it can only inheritance from one class.
The interfaces help us to simulate the multiple inheritance.
Methods with implementation are not allowed. (some languages allow that).

Derived classes are often called subclasses, and base classes are often called superclasses.

In this [example](./OOP/Principles/Inheritance/inheritance.ts) because Cat extends the functionality from Animal, we were able to create an instance of Dog that could both meow() and move().

This is a more complex scenario [example 2](./OOP/Principles/Inheritance/inheritanceTwo.ts) where we see the extends keywords used to create two new subclasses of Animal: Horse and Snake.
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
    - The decorator pattern adds extensibility without modifying the original object.
    - Adds behavior to existing classes in a system dynamically.
    - Can be used to modify existing systems where we wish to add additional features to objects.
    - The Decorator pattern isn’t heavily tied to how objects are created but instead focuses on the problem of extending their functionality.
* **Why using it?**
    - Applications may contain features requiring a large quantity of distinct types of object.
    - The object constructors could represent distinct player types, each with differing capabilities.
    - Imagine having to create subclasses for each combination of capability type.
* **Terminology**
    - **Component interface**: An interface for objects.
    - **Component**: The object that may be decorated.
    - **Decorator**: The class that applies the extra responsibilities to the component being decorated. It also implements the same component interface.

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