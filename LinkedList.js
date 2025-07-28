// Necessary Imports (you will need to use this)
const { Student } = require('./Student')

/**
 * Node Class (GIVEN, you will need to use this)
 */
class Node {
  // Public Fields
  data               // Student
  next               // Object
  /**
   * REQUIRES:  The fields specified above
   * EFFECTS:   Creates a new Node instance
   * RETURNS:   None
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}

/**
 * Create LinkedList Class (for student management)
 * The class should have the public fields:
 * - head, tail, length
 */
class LinkedList {
  // Public Fields
  head              // Object
  tail              // Object
  length            // Number representing size of LinkedList

  /**
   * REQUIRES:  None
   * EFFECTS:   Creates a new LinkedList instance (empty)
   * RETURNS:   None
   */
  constructor() { 
    this.head = null;
    this.tail = null;
    this.length = 0;
    
    // TODO  // I am creating a new Linked List within a class that is empty so head, tail & length are null and 0.
  }

  /**
   * REQUIRES:  A new student (Student)
   * EFFECTS:   Adds a Student to the end of the LinkedList
   * RETURNS:   None // means we dont need a console.log
   * CONSIDERATIONS:
   * - Think about the null case
   * - Think about adding to the 'end' of the LinkedList (Hint: tail)
   */
    addStudent(newStudent) {
    let newNode = new Node(newStudent); // Create a new Node with the Student data
    if (!this.head) { // If Linked List is empty, this newNode (student) is both head and tail
      this.head = newNode; // Set the head to the new node. If its empty, the newNode will be the head and tail of the Linked List
      this.tail = newNode; // Set the tail to the new node. If its empty, the newNode will be the head and tail of the Linked List
    } else { // If Linked List is not empty, we will add the newNode to the end of the Linked List
      this.tail.next = newNode; // Link the current tail to the new node
      this.tail = newNode; // This will keep this newNode as the tail of the Linked List
    }
    this.length++; // Need to enable the length to be updated. Only goes at the end after adding a new student
    
    // TODO // This is adding a new student to the end of the Linked List
  }

  /**
   * REQUIRES:  email(String)
   * EFFECTS:   Removes a student by email (assume unique)
   * RETURNS:   None // means this function does not return anything
   * CONSIDERATIONS:
   * - Think about the null case
   * - Think about how removal might update head or tail
   */
  removeStudent(email) { // This function will remove a student by email
    // I am checking if the Linked List is empty, if it is, it will return nothing
    // I am also checking if the head is null, which means the Linked List is empty
    if (!this.head) { // If the Linked List is empty, there is nothing to remove. !this.head is a falsy value, so I will return nothing
      return; // I will return nothing, so I will not console.log anything
    }
    let current = this.head; // Start at the head of the Linked List
    let previous = null; // Previous node to keep track of the node before current
    while (current) { // Creating a loop. While there is a current node, I will keep traversing the Linked List
      if (current.data.email === email) { // If the current node's data email matches the email we are looking for
        if (previous) { // If there is a previous node, we will link it to the next node
          previous.next = current.next; // Link the previous node to the next node
        } else { // If there is no previous node, it means we are at the head of the Linked List
          this.head = current.next; // Update the head to the next node
        }
        if (current === this.tail) { // If the current node is the tail, we need to update the tail
          this.tail = previous; // Update the tail to the previous node
        }
        this.length--; // Decrease the length of the Linked List becasue we are removing a student
        return; // Return nothing after removing the student
      }
      previous = current; // Move the previous node to the current node
      current = current.next; // Move the current node to the next node
    }
    // If we reach here, it means the student was not found, so we do nothing
    // TODO //
  }

  /**
   * REQUIRES:  email (String)
   * EFFECTS:   None
   * RETURNS:   The Student or -1 if not found
   */
  findStudent(email) { // This function will find a student by email
    let current = this.head; // Start at the head of the Linked List 
    while (current) { // While there is a current node, I will keep traversing the Linked List
      if (current.data.email === email) { // Checking if the current node's data email matches the email we are looking for. I am using === to compare the email because I want it to be an exact match (using strict equality)
        return current.data; // Return the student data if found, wont continue the loop
      }
      current = current.next; // Move to the next node if the current node's email does not match the email we are looking for
      // This will continue to traverse the Linked List until it finds the student or reaches the end
    }
    // If we reach here, it means the student was not found, so we return -1
    // I am not console.logging anything, as the index.js file will handle the console logging

    // TODO //
    return -1 
  }

  /**
   * REQUIRES:  None
   * EFFECTS:   Clears all students from the Linked List
   * RETURNS:   None
   */
  clearStudents() { // This function will clear all students from the Linked List. It was a private method, so it cannot be accessed outside of this class. I changed to public so it can be accessed in the index.js file
    this.head = null; // Set the head to null, which means the Linked List is empty
    this.tail = null; // Set the tail to null, which means the Linked List is empty
    this.length = 0; // Resets the count of nodes to 0, which means the Linked List is empty
  
    // TODO
  }

  /**
   * REQUIRES:  None
   * EFFECTS:   None
   * RETURNS:   LinkedList as a String for console.log in caller
   * CONSIDERATIONS:
   *  - Let's assume you have a LinkedList with two people
   *  - Output should appear as: "JohnDoe, JaneDoe"
   */
  displayStudents() { // This function will display all students in the Linked List
    let current = this.head; // Starts at the first node (head) of the Linked List to loop through the nodes
    let studentsArray = []; // Creates an array to store the student names
    while (current) { // Loop through the Linked List until there are no more nodes. Then the loop will stop
      studentsArray.push(current.data.name); // Add the student name to the array
      current = current.next; // Move to the next node
    }
    // This will return a string of student names separated by commas
    // I am not console.logging anything, as the function will return a string ("JohnDoe, JaneDoe") and the index.js file will handle the console logging

    // TODO // 
    return studentsArray.join(", "); // This will return a string of student names separated by commas
  }

  /**
   * REQUIRES:  None
   * EFFECTS:   None
   * RETURNS:   A sorted array of students by name
   */
  #sortStudentsByName() { // This function will sort the students in the Linked List by name. It is a private method, so it cannot be accessed outside of this class
    let current = this.head; // Start at the head of the Linked List  
    let studentsArray = []; // Create an array to store the student names
    while (current) { // While there is a current node, I will keep traversing  the Linked List
      studentsArray.push(current.data); // Push the student data to the array
      current = current.next; // Move to the next node
    }

    // TODO // I am sorting the students in the Linked List by name and returning a sorted array
    return studentsArray.sort((a, b) => a.name.localeCompare(b.name)); // This will return a sorted array of student names alphabetically. I used this method (Sorting non-ASCII characters) because names may not be in English
  }

  /**
   * REQUIRES:  specialization (String)
   * EFFECTS:   None
   * RETURNS:   An array of students matching the specialization, sorted alphabetically by student name
   * CONSIDERATIONS:
   * - Use sortStudentsByName()
   */
  filterBySpecialization(specialization) { // This function will filter the students in the Linked List by specialization
    let current = this.head; // Start at the head of the Linked List
    let studentsArray = []; // Create an array to store the student names that match the specialization
    while (current) { // While there is a current node, I will keep traversing the Linked List. Creating a loop until we reach the end of the Linked List
      if (current.data.specialization === specialization) { // checking if the current node's data specialization matches the specialization
        studentsArray.push(current.data); // If it matches adds the student data to the array
      }
      current = current.next; // Move to the next node in the Linked List
    }

    // TODO
    return this.#sortStudentsByName(studentsArray); // This will return a sorted array of student names alphabetically
  }

  /**
   * REQUIRES:  minAge (Number)
   * EFFECTS:   None
   * RETURNS:   An array of students who are at least minAge, sorted alphabetically by student name
   * CONSIDERATIONS:
   * - Use sortStudentsByName()
   */
  filterByMinAge(minAge) { // This function will filter the students in the Linked List by minimum age
    let current = this.head; // Start at the head of the Linked List
    let studentsArray = []; // Create an array to store the student names
    while (current) { // While there is a current node, I will keep traversing the Linked List
      if (current.data.age >= minAge) { // If the current node's data age is greater than or equal to the minimum age we are looking for
        studentsArray.push(current.data); // Add the student data to the array 
      }
      current = current.next; // Move to the next node  
    }

    // TODO
    return this.#sortStudentsByName(studentsArray); // This will return a sorted array of student names alphabetically
  }

  /**
   * REQUIRES:  A valid file name (String)
   * EFFECTS:   Writes the LinkedList to a JSON file with the specified file name
   * RETURNS:   None
   */
  async saveToJson(fileName) { // This function will save the Linked List to a JSON file
    const fs = require('fs').promises; // This is loading in a built in file saving function from Node.js to save the Linked List to a JSON file
    let current = this.head; // Start at the head of the Linked List to loop through the nodes to save the information
    let studentsArray = []; // I am creating an array to store the student data that will be saved in JSON format
    
    while (current) { // While there is a current node, I will keep traversing the Linked List
      studentsArray.push(current.data); // Add student info to the array
      current = current.next; // Move to the next node. This will continue to traverse the Linked List until it reaches the end
    }
  
    try { // This is a try-catch block to handle any errors that may occur while saving the data
      const jsonString = JSON.stringify(studentsArray, null, 2); // Convert the array of students to a JSON string with pretty-printing (2 spaces for indentation)
      await fs.writeFile(fileName, jsonString, 'utf8'); // Write the JSON string to the specified file
      console.log(`Saved ${studentsArray.length} students to ${fileName}`); // Log the number of students saved and the file name. This will display a message indicating that the data has been saved to the specified file
    
    } catch (error) {
      console.error(`Error saving to JSON file: ${error.message}`); // Log any errors that occur during file writing
    }

    // TODO
  }

  /**
   * REQUIRES:  A valid file name (String) that exists
   * EFFECTS:   Loads data from the specified fileName, overwrites existing LinkedList
   * RETURNS:   None
   * CONSIDERATIONS:
   *  - Use clearStudents() to perform overwriting
   */
  async loadFromJSON(fileName) { // This function will load the Linked List from a JSON file
    const fs = require('fs').promises; // Using the built-in file system to read the JSON file
    
    try { // This is a try-catch block to handle any errors that may occur while loading the data
      const data = await fs.readFile(fileName, 'utf8'); // Read the file with the specified file name
      const studentsArray = JSON.parse(data); // Turning the string of JSON data into an array of students
      this.clearStudents(); // Clear the existing Linked List before loading new data
      
      for (const studentData of studentsArray) { // Loop through each student in the array
        const student = new Student(studentData.name, studentData.year, studentData.email, studentData.specialization); // Create a new Student instance
        this.addStudent(student); // Add and saves the student to the Linked List
       
        // TODO //
      }
    } catch (error) {
      console.error(`Error loading from JSON file: ${error.message}`); // Log any errors that occur during file reading
    }
  }
}

module.exports = { LinkedList }
