// Necessary Imports, DO NOT REMOVE
const { LinkedList } = require("./LinkedList");
const { Student } = require('./Student')
const readline = require('readline');

// Initialize terminal interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Creates the Student Management System as a Linked List
/**
 * studentManagementSystem is the object that the main() function will be modifying
 */
const studentManagementSystem = new LinkedList();

// Display available commands
function main() {
  console.log(`
      Available Commands:
      - add [name] [year] [email] [specialization]: Add a student
      - remove [email]: Remove a student by email
      - display: Show all students
      - find [email]: Find a student by email
      - save: Save the current linked list to the specified file
      - load [fileName]: Load a linked list from a file
      - clear: Clear the current linked list
      - q: Quit the terminal
  `);
}

// Command handling logic
async function handleCommand(command) { // Split the command into operation and arguments
  const [operation, ...args] = command.trim().split(' ');  // This is splitting the command into an array where the first element is the operation and the rest are the arguments. Then I can use the args array to get the arguments for the operations

  switch (operation) {
    case 'add':
      /**
       * TODO:
       *  Find a particular student by email, and returns their information // ??This is not correct, it should be adding a student
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation)
       *   - Grab the args (code is given)
       *   - Use implemented functions in LinkedList to add the Student, and display the updated LinkedList
       */
        console.log('Adding student...') // We are creating a new student class (cookie cutter for information) and adding it to the linked list
        const [name, year, email, specialization] = args // This is taking the args array and destructuring it into the variables name, year, email, and specialization
        // --------> WRITE YOUR CODE BELOW
        
        const student = new Student(name, year, email, specialization); // Creates a new Student class with the provided args. I need to do new Student rather than just student to create a new student class. If not new Student, it will just be a regular object and not a class
        studentManagementSystem.addStudent(student); // I am adding the new student to the linked list using .addStudent from the LinkedList
        // This will add the student to the linked list
        console.log(studentManagementSystem.displayStudents()); // This will display the updated Linked List

        // --------> WRITE YOUR CODE ABOVE
        break;

    case 'remove':
      /**
       * TODO:
       *  Removes a particular student by email
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation)
       *   - Grab the args (removeEmail)
       *   - Use implemented functions in LinkedList to remove the Student, and display the updated LinkedList
       */
      console.log('Removing student...')
      // --------> WRITE YOUR CODE BELOW
      
      const [removeEmail] = args; // Get the email from the args array using destructuring. I am getting removeEmail from the args
      studentManagementSystem.removeStudent(removeEmail); // This implements the linkedlist. Remove the student from the Linked List
      console.log(studentManagementSystem.displayStudents()); // This will display the updated Linked List after removal

      // --------> WRITE YOUR CODE ABOVE
      break;

    case 'display':
      /**
       * TODO:
       *  Displays the students in the Linked List
       *  You will need to do the following:
       *   - Use implemneted functions in LinkedList to display the student
       */
      console.log('Displaying students...')
      // --------> WRITE YOUR CODE BELOW
      
      console.log(studentManagementSystem.displayStudents()); // This calls from displayStudents in the linked listand and will display all students in the Linked List

      // --------> WRITE YOUR CODE ABOVE
      break;

    case 'find':
      /**
       * TODO:
       *  Finds a particular student by email, and returns their information
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation)
       *   - Grab the args (findEmail)
       *   - Use implemented functions in LinkedList to grab the Student
       *   - Use implemented functions in Student to display if found, otherwise, state "Student does not exist"
       */
      console.log('Finding student...')
      // --------> WRITE YOUR CODE BELOW
      
      const [findEmail] = args; // Get the email from the args
      const findStudent = studentManagementSystem.findStudent(findEmail); // Find the student in the Linked List from .findstudent(email)
      if (findStudent === -1) { // This checks if we did not find a student
        console.log("Student does not exist"); // Will display message if student is not found
      } else { // This means if the student is found, display their information
        console.log(findStudent); // Will display the found student's information
      }
      
      // --------> WRITE YOUR CODE ABOVE
      break;

    case 'save':
      /**
       * TODO:
       *  Saves the current LinkedList to a specified JSON file
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation) // This is already done in the LinkedList.js file
       *   - Grab the args (saveFileName)
       *   - Use implemented functions in LinkedList to save the data
       */
      console.log('Saving data...')
      // --------> WRITE YOUR CODE BELOW
      
      const [saveFileName] = args; // Get the file name from the args
      if (!saveFileName) { // Check if the saveFileName is provided, if not, display a message
        console.log('Please provide a file name to save data.'); // If not provided, display a message
        break; // Exit the switch case if no file name is provided
      }
      await studentManagementSystem.saveToJson(saveFileName); // Saving the current Linked List to the JSON file
      console.log(`Data saved to ${saveFileName}`); // Display a message indicating that the data has been saved
      break; // Exit the switch case after saving the data

      // --------> WRITE YOUR CODE ABOVE

    case "load":
      /**
       * TODO:
       *  Loads data from specified JSON file into current Linked List
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation)
       *   - Grab the args (loadFileName)
       *   - Use implemented functions in LinkedList to save the data, and display the updated LinkedList
       */
      console.log('Loading data...')
      // --------> WRITE YOUR CODE BELOW
      
      const [loadFileName] = args; // Get the file name from the args
      await studentManagementSystem.loadFromJSON(loadFileName); // Load the data from the specified JSON file into the Linked List
      console.log(studentManagementSystem.displayStudents()); // Display the updated Linked List after loading data by calling displayStudents. It is beeing saved through the loadFromJSON method in the LinkedList class.
      // This will display the students in the linked list after loading data from the JSON file

      // --------> WRITE YOUR CODE ABOVE
      break;

    case 'clear':
      /**
       * TODO:
       *  Clears all data in the Linked List
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation) // This is already done in the LinkedList.js file
       *   - Use implemented functions in LinkedList to clear the data
       */
      console.log('Clearing data...')
      // --------> WRITE YOUR CODE BELOW
      
      studentManagementSystem.clearStudents(); // Clear all data in the Linked List. This is calling the clearStudents method in the LinkedList class to clear all students in the linked list
     
      // --------> WRITE YOUR CODE ABOVE
      break;

    case 'q':
        console.log('Exiting...');
        rl.close();
        break;

    default:
        console.log('Unknown command. Type "help" for a list of commands.');
        break;
  }
}

// Start terminal-based interaction (DO NOT MODIFY)
console.log('Welcome to the Student Management System!');
main();
rl.on('line', async (input) => {
  if (input.trim().toLowerCase() === 'help') {
    main();
  } else {
      await handleCommand(input);
  }
});
rl.on('close', () => {
  console.log('Goodbye!');
});
