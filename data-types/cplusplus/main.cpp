#include <iostream>
using namespace std;
#include <typeinfo>

void getType (char type){
  // switch (type) {
  //   case typeid(myClassA):
  //     // handle that case
  //     break;
  //   case typeid(myClassB):
  //     // handle that case
  //     break;
  //   case typeid(uint32_t):
  //     // handle that case
  //     break;
  //   default:
  //     // handle that case
  // }
  cout << type << endl;
};

int main()
{
  // getType(type);
  int k;
  cout << typeid(k).name() << endl;
  // cout << typeid("taco").name() << endl;
}

// Compile with g++ main.cpp -o main.out
// Execute with ./main.out