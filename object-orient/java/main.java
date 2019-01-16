import java.util.*;
import java.lang.System;

class Todo {
    String message;
    int index = 0;
    Boolean completed = false;
    
    Todo(String m, int i){
        message = m;
        index = i;
    }
    public void display(){
        String prefix = (completed) ? "[x]" : "[ ]";
        System.out.println(prefix + " " + (index + 1) + " - " + message);
    }
}

class TodoApp {
    ArrayList<Todo> todos = new ArrayList<Todo>();
    
    public void add(String message){
        int index = todos.size();
        Todo todo = new Todo(message, index);
        todos.add(todo);
    }
    public void list(){
        todos.forEach((todo) -> todo.display());
    }
    public void complete(int index){
        todos.get(index - 1).completed = true;
    }
}

public class Main {

     public static void main(String []args){
        TodoApp todoapp = new TodoApp();
        todoapp.add("Finish Medium Article");
        todoapp.add("Buy Groceries");
        todoapp.add("Clean Bedroom");
        
        todoapp.complete(1);

        todoapp.list();
     }
}