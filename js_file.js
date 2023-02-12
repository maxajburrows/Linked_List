class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
    get nextNode () {
        return this.nextNode;
    }
    set nextNode (node) {
        this.nextNode = node;
    }
}

class LinkedList {
    constructor(value = null) {
        this.head = new Node(value);
        this.size = 0;
        this.tail = this.head;
    }

    append (value) {
        let currentNode = this.head;
        this.tail = new Node(value);
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = this.tail;
        size++;
    }

    prepend (value) {
        this.head = new Node(value, this.head)
    }
}

