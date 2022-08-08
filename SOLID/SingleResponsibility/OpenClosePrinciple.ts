class Data  {
    
    height;
    weight;
    
}

class CalculateBMI {

    CALCULATE_JOHN_BMI(/*Data*/ John) {   
        
        return John.height/John.weight;
        
    }

    CALCULATE_JANE_BMI(/*Data*/ Jane) {   
        
        return Jane.height/Jane.weight;
        
    }
}
/**
 * The problem with this is that we keep modifying the code every 
 * time we need to calculate the BMI of another person.
 * This also violates the SRP because the class now has more than
 * one reason to change.
 */

interface Entity {

     CalculateBMI();

}

// John entity
 class John implements Entity {

    height: number;
    weight: number;

      CalculateBMI() {

          return this.height/this.weight;
    }
}

// Jane entity
class Jane implements Entity {

    height: number;
    weight: number;

      CalculateBMI() {

          return this.height/this.weight;
    }
}

// Dog entity
 class Dog implements Entity {

     height: number;
     weight: number;

      CalculateBMI() {

          return this.height/this.weight;
    }
}