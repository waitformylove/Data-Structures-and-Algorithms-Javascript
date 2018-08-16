//Learn from source https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54"

//add constructors for LinkedList
function LinkedList(){
	this.head = null;
	this.tail = null;
}
//print LinkedList
LinkedList.prototype.print = function (){
	console.log('Head = ', this.head);
	console.log('Tail = ', this.tail);
}

//add constructors for a Node in LinkedList
function Node(value, next, prev){
	this.value 	= value;
	this.next  	= next;
	this.prev   = prev;
};

//add a value (in a new Node) to a head of LinkedList (LikedList's prototype)
LinkedList.prototype.addToHead = function(value){
	//make a newnode as a head
	// next of newHeadnode is head before
	const newHeadNode  = new Node(value, this.head, null);//const is constant and blocked-scope
	// prev of before head node (if exists) is newnode
	//if not exist head node => add tail of linkedList
	//finally, update head of LinkedList
	if(this.head) 
		this.head.prev = newHeadNode;
	else 
		this.tail      = newHeadNode;

	this.head          = newHeadNode;	
}
//add a value (in a new Node) to a tail of LinkedList (LikedList's prototype)
LinkedList.prototype.addToTail = function (value){
	//make a newnode as a tail
	// prev of newHeadnode is tail before
	const newTailNode  = new Node (value, null , this.tail);
	//next of before tail node (if exists)   is new node
	//if not exists tail node => add head of linkedList
	//finally, update tail of LinkedList
	if (this.tail)
		this.tail.next = newTailNode;
	else
		this.tail      = newTailNode;

	this.tail          = newTailNode;
}

LinkedList.prototype.removeHead = function() {
	if(!this.head) 
		return null; // empty array
	
	let value = this.head.value; //save value to return function
	this.head = this.head.next; 
	//next node of before head will become now head
	//check exist of now head and set it now (set prev to null) .
	//else => linked list now have only 0 elements = > this.head now = null => set this.tail = null
	if(this.head) 
		this.head.prev = null;
	else
		this.tail      = null;
};

LinkedList.prototype.removeTail = function() {
	if(!this.tail)
		return null; //empty array
	
	let value = this.tail.value;
	this.tail = this.tail.prev;

	if(this.tail)
		this.tail.next = null;
	else
		this.head      = null;

	return value;
};

//search a Node has a value method
LinkedList.prototype.search = function(value) {
	let currentNode = this.head;
	while (currentNode){
		if (currentNode.value == value) 
			return currentNode;
		else
			currentNode = currentNode.next;
	}
	return null;
};

//start main

var list = new LinkedList();
list.addToHead(2);
list.addToHead(1);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);

list.removeHead();
list.removeTail();

var nodeSearched;
if( nodeSearched = list.search(5)) 
	console.log("Find Node : ", nodeSearched);
else
	console.log("Not find that value in LIST");

console.log("Remaining List is");
list.print();  // Let understand circular
