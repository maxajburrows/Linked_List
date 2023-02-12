class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(value = null) {
        this.head = new Node(value);
    }

    append (value) {
        let currentNode = this.head;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node(value);
    }
}

