const inquirer = require('inquirer')

// Containts Data of Todo
class Todo {
  constructor(message, index){
    this.message = message
    this.index = index 
    this.complete = false
  }
  display(){
    let prefix = (this.complete) ? '[x]' : '[ ]'
    console.log(`${prefix} ${this.index + 1} - ${this.message} \n`)
  }
}
// Manages list of Todos
class TodoApp {
  constructor(){
    this.todos = []
  }
  add(message){
    let index = this.todos.length
    let todo = new Todo(message, index)
    this.todos.push(todo)
    this.list()
  }
  complete(index){
    if(!this.todos[index - 1])
      return console.log('\n TODO does not exist \n')
    this.todos[index - 1].complete = true
    this.list()
  }
  list(){
    //complete
    console.log('\n TODO === \n')
    this.todos.forEach(m => m.display())

  }
}

// Initialize TodoApp
const todoApp = new TodoApp()

// Add some default Todos
todoApp.add('Finish Medium Article')
todoApp.add('Buy Groceries')
todoApp.add('Clean Bedroom')

// Display all Todos in TodoApp
todoApp.list()

// Terminal prompts
const questions = [{
  type: 'list',
  name: 'answer',
  message: 'What would you like to do?',
  choices: ['Add a TODO', 'Complete a TODO']
  },
  {
  type: 'input',
  name: 'answer',
  message: 'Type what you have to do',
  },
  {
    type: 'input',
    name: 'answer',
    message: 'Type the number of the TODO you completed',
  }
  ]

// Prompt user about Adding or Completing a Todo
function askQuestion(){
  inquirer
  .prompt([questions[0]])
  .then(answers => {

    if(answers.answer === 'Add a TODO'){
      inquirer
      .prompt([questions[1]])
      .then(answers => {
        todoApp.add(answers.answer)
        askQuestion()
      })
    } else {
      inquirer
      .prompt([questions[2]])
      .then(answers => {
        todoApp.complete(answers.answer)
        askQuestion()
      })
    }

  })
}

askQuestion()