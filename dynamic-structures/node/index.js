class Node {
  constructor(value) {
      this.value = value,
          this.next = null
  }
  details() {
      console.log(this.value)
      if(this.next && this.next.value){
        console.log("next", this.next.value)
      }
  }
}

class LinkedList {
  constructor() {
      this.head = null
      this.length = 0
  }
  add(value) {
      let node = new Node(value)
      let currentNode = this.head
      
      // If first node, make it head
      if (currentNode === null) {
          this.head = node
      } else {
          while (currentNode) {
              if (currentNode.next === null) {
                  currentNode.next = node
                  break
              }
              currentNode = currentNode.next
          }
      }
      this.length++
  }
  remove(value) {
      var currentNode = this.head
      var prevNode = null

      while (currentNode) {
          if (currentNode.value === value) {
              
              // handle head
              if (prevNode === null) {
                  this.head = currentNode.next
              } else {
                  prevNode.next = currentNode.next
              }
              this.length--
                  return
          }
          prevNode = currentNode
          currentNode = currentNode.next
      }
  }
  details() {
      var currentNode = this.head
      while (currentNode) {
          currentNde.details()
          currentNode = currentNode.next
      }
  }
}

let list = new LinkedList()

list.add('Tony')
list.add('Gerald')
list.add('Abby')

list.details()

console.log('Removing tony \n')
list.remove('Tony')

console.log('Adding Richard, Barbara, Dick \n')

list.add('Richard')
list.add('Barbara')
list.add('Dick')

console.log('Removing Abby \n')

list.remove('Abby')
list.details()