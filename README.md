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
 
 **See exampleOne.js**