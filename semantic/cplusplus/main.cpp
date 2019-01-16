#include <iostream>
#include "saymessage.h"

using namespace std;

SayMessage::SayMessage(string mess)
{
  message = mess;
}

void SayMessage::print()
{
  cout << message << endl;
}

int main(){
  string message = "Hello World";
  SayMessage saymessage(message);
  saymessage.print();
}

// Compile with g++ main.cpp -o main.out
// Execute with ./main.out