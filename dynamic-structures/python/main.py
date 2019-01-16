class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
    def details(self):
        print self.value
        
class LinkedList:
    def __init__(self):
        self.head = None
        self.length = 0
    def add(self, value):
            node = Node(value)
            currentNode = self.head
            
            if(currentNode == None):
                self.head = node
            else:
                while(currentNode):
                    if(currentNode.next == None):
                        currentNode.next = node
                        break
                    currentNode = currentNode.next
            self.length = self.length + 1
    def remove(self, value):
        currentNode = self.head
        prevNode = None
        
        while(currentNode):
            if(currentNode.value == value):
                if(prevNode == None):
                    self.head = currentNode.next
                else:
                    prevNode.next = currentNode.next
            prevNode = currentNode
            currentNode = currentNode.next
        
    def details(self):
            currentNode = self.head
            while(currentNode):
                currentNode.details()
                currentNode = currentNode.next
                
linked_list = LinkedList()

linked_list.add('Tony')
linked_list.add('Gerald')
linked_list.add('Abby')

linked_list.details()

print('Removing tony \n')
linked_list.remove('Tony')

print('Adding Richard, Barbara, Dick \n')

linked_list.add('Richard')
linked_list.add('Barbara')
linked_list.add('Dick')

print('Removing Abby \n')

linked_list.remove('Abby')
linked_list.details()