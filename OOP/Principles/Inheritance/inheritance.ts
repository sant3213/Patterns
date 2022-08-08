class Animal {
    move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
    }
  }
   
  class Cat extends Animal {
    meow() {
      console.log("Miau! Miau!");
    }
  }
   
  const cat = new Cat();
  cat.meow();
  cat.move(10);
  cat.meow();