import java.io.*;

class Main {
  public static void main(String[] args){
      String message = "Hello World";
      SayMessage saymessage = new SayMessage(message);
      saymessage.print();
  }
}

// Compile with javac Main.java
// Execute with java Main