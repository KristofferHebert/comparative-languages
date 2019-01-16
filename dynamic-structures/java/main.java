class Node {
	public String value;
	public Node next = null;
	Node(String value) {
		this.value = value;
	}
	public void details() {
		System.out.println(this.value);
	}
}

class LinkedList {
	public Node head = null;
	public int length = 0;

	public void add(String value) {
		Node node = new Node(value);
		Node currentNode = this.head;

		if (currentNode == null) {
			this.head = node;
		} else {

			while (currentNode != null) {
				if (currentNode.next == null) {
					currentNode.next = node;
					break;
				}
				currentNode = currentNode.next;
				length++;

			}
		}

	}
	public void details() {
		Node currentNode = this.head;

		while (currentNode != null) {

			currentNode.details();
			currentNode = currentNode.next;
		}
	}
	public void remove(String value) {
		Node currentNode = this.head;
		Node prevNode = null;
		while (currentNode != null) {
			if (currentNode.value == value) {
				if (prevNode == null) {
					this.head = currentNode.next;
				} else {
					prevNode.next = currentNode.next;
				}
				length--;
				break;
			}

			prevNode = currentNode;
			currentNode = currentNode.next;

		}
	}
}
public class Main {
	public static void main(String[] args) {

		LinkedList list = new LinkedList();

        list.add("Tony");
        list.add("Gerald");
        list.add("Abby");

        list.details();

        System.out.println("Removing Tony \n");
        list.remove("Tony");

        System.out.println("Adding Richard, Barbara, Dick \n");

        list.add("Richard");
        list.add("Barbara");
        list.add("Dick");

        System.out.println("Removing Abby \n");

        list.remove("Abby");
        list.details();
	}
}
