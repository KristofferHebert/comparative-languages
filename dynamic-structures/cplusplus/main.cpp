#include <iostream> 
#include <string>

using namespace std;

class Node {
public:
    string value;
    Node* next;

    Node(string v)
    {
        value = v;
        next = NULL;
    }

    void details()
    {
        cout << value << endl;
    }
};

class LinkedList {
public:
    int length;
    Node* head;
    
    LinkedList(){
        length = 0;
        head = NULL;
    }

    void add(string value)
    {
        Node* node = new Node(value);
        Node* currentNode = head;

        if (currentNode == NULL) {
            head = node;
        }
        else {

            while (currentNode) {
                if (currentNode->next == NULL) {
                    currentNode->next = node;
                    break;
                }
                currentNode = currentNode->next;
                length++;
            }
        }
    }
    void details()
    {
        Node* currentNode = head;

        while (currentNode) {

            currentNode->details();
            currentNode = currentNode->next;
        }
    }
    void remove(string value)
    {
        Node* currentNode = head;
        Node* prevNode = NULL;

        while (currentNode != NULL) {
            if (currentNode->value == value) {
                if (prevNode == NULL) {
                    head = currentNode->next;
                }
                else {
                    prevNode->next = currentNode->next;
                }
                length--;
                break;
            }

            prevNode = currentNode;
            currentNode = currentNode->next;
        }
    }
};

int main()
{
    LinkedList list;

    list.add("Tony");
    list.add("Gerald");
    list.add("Abby");

    list.details();

    cout << "Removing Tony \n" << endl;
    list.remove("Tony");

    cout << "Adding Richard, Barbara, Dick \n" << endl;

    list.add("Richard");
    list.add("Barbara");
    list.add("Dick");
    
    list.details();

    cout << "\nRemoving Abby \n" << endl;

    list.remove("Abby");
    
    list.details();
    
}