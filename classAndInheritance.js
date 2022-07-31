

    class Student extends Person {
        /*	
        *   Class Constructor
        *   
        *   @param firstName - A string denoting the Person's first name.
        *   @param lastName - A string denoting the Person's last name.
        *   @param id - An integer denoting the Person's ID number.
        *   @param scores - An array of integers denoting the Person's test scores.
        */
        // Write your constructor here
    
        /*	
        *   Method Name: calculate
        *   @return A character denoting the grade.
        */
        // Write your method here
        constructor(firstname, lastname, id, scores) {
        super(firstname, lastname, id);
        this.scores = scores;
      }
          calculate() {
        
            let averageScore = this.scores.reduce((a, b) => a + b) / this.scores.length;
            switch(true) {
                case (averageScore >= 90):
                    return "O"
                case (averageScore >= 80):
                    return "E"
                case (averageScore >= 70):
                    return "A"
                case (averageScore >= 55):
                    return "P"
                case (averageScore >= 40):
                    return "D"
                case (averageScore < 40):
                    return "T"
            }
          
          }
          
      
    }