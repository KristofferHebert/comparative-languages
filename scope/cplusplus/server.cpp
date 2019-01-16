#include <iostream>
#include <string>
using namespace std;

// Global variable
string x = "hello";

void sayMessage();

int main(){
  sayMessage();
  return 0;
}

void sayMessage(){
  cout << x << endl;
} 