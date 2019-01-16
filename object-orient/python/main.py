class Todo:
    def __init__(self, message, index):
        self.message = message
        self.index = index
        self.complete = False
    def display(self):
        prefix = "[x]" if self.complete else "[ ]"
        print prefix, self.index + 1, "-", self.message

class TodoApp:
    def __init__(self):
        self.todos = []
    def add(self, message):
            index = len(self.todos)
            todo = Todo(message, index)
            self.todos.append(todo)

    def complete(self, index):
            if(not self.todos[index - 1]):
                print("Todo does not exist")
                return
            self.todos[index - 1].complete = True
            self.list()
    def list(self):
            print("\n TODO === \n")
            for todo in self.todos:
                todo.display()

todo_app = TodoApp()

todo_app.add("Finish Medium Article")
todo_app.add("Buy Groceries")
todo_app.add("Clean Bedroom")

todo_app.complete(1)