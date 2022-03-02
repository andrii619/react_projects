














class Node {
	
	constructor(data, nextPointer)
	{
		this.data = data;
		this.next = nextPointer;
		
	}
}


class NodeDLL {
	
	constructor(data, nextPointer, prevPointer)
	{
		this.data = data;
		this.next = nextPointer;
		this.prev = prevPointer;
		
	}
	
	
	
	
	
}



class LinkedList {
	
	
	constructor()
	{
		
		this.head = null;
		this.tail = null;
		this.length = 0;
		
	}
	
	
	
	prepend(data)
	{
		// tested
		// add to beginning of linked list
		
		if(data === undefined || data === null)
		{
			return;
		}
		
		if(!this.head)
		{
			this.head = new Node(data, null);
			this.tail = this.head;
		}
		else
		{
			const newNode = new Node(data, this.head);
			this.head = newNode;
		}
		this.length++;
	}
	
	removeFirst()
	{
		// tested
		//remove data from beginning of list
		// return the removed node data
		
		if(!this.head)
		{
			return undefined;
		}
		const removedNode = this.head;
		this.head = this.head.next;
		removedNode.next = null;
		this.length--;
		return removedNode.data;
	}
	
	append(data)
	{
		// tested
		// add to the end of linked list
		if(data === undefined || data === null)
		{
			return;
		}
		
		if(!this.head)
		{
			this.head = new Node(data, null);
			this.tail = this.head;
		}
		else
		{
			const newNode = new Node(data, null);
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}
	
	removeLast()
	{
		// tested
		//remove data from end of list
		
		if(!this.tail)
		{
			return undefined;
		}
		
		let currentNode = this.head;
		let prevNode = null;
		while(currentNode !== this.tail)
		{
			prevNode = currentNode;
			currentNode = currentNode.next;
		}
		
		if(prevNode)
		{
			prevNode.next = null;
			this.tail = prevNode;
		}
		else
		{
			// last item
			currentNode.next = null;
			this.head = null;
			this.tail = null;
		}
		
		//this.tail = null;
		this.length--;
		return currentNode.data;
	}
	
	
	traverse()
	{
		
		let currentNode = this.head;
		while(currentNode)
		{
			console.log("--------------------------");
			let s = "| NODE: " + currentNode.data + " |";
			if(currentNode === this.head)
			{
				s = s + "<---- HEAD";
				if(currentNode === this.tail)
				{
					s = s + "<---- TAIL";
				}
			}
			else if(currentNode === this.tail)
			{
				s = s + "<---- Tail";
			}
			console.log(s);
			console.log("--------------------------");
			console.log("|");
			console.log("V");
			currentNode = currentNode.next;
		}
		console.log("NULL");
		console.log("Lenght: "+ this.length);
	}
	
	
	insert(index, value)
	{
		
		if(typeof(index) !== "number" || index < 0 || index > this.length)
		{
			return undefined;
		}
		
		if(value === undefined || value === null)
		{
			return;
		}
		
		let prevNode = null;
		let currentNode = this.head;
		let i = 0;
		
		while(i < index)
		{
			prevNode = currentNode;
			currentNode = currentNode.next;
			i++;
		}
		
		if(!currentNode)
		{
			let newNode = new Node(value, null);
			if(!prevNode)
			{
				//empty list
				console.log("emty list");
				this.head = newNode;
			}
			else
			{
				//last in list
				console.log("last in list");
				this.tail.next = newNode;
			}
			this.tail = newNode;
			this.length++;
		}
		else
		{
			
			let newNode = new Node(value, currentNode);
			if(prevNode)
			{
				console.log("mid insert");
				prevNode.next = newNode;
			}
			else
			{
				// beginning of list 
				console.log("prepend")
				///newNode.next = this.head;
				this.head = newNode;
			}
			this.length++;
		}
		
		
		
		//moo --> shmoo --> foo
		//0        1          2
		//length = 3
		
		
	}
	
	
	remove(index)
	{
		if(typeof(index) !== "number" || index < 0 || index >= this.length)
		{
			return undefined;
		}
		
		let prevNode = null;
		let currentNode = this.head;
		let i = 0;
		
		while(i < index)
		{
			
			prevNode = currentNode;
			currentNode = currentNode.next;
			i++;
		}
		
		
		if(currentNode === this.head)
		{
			console.log("remove head");
			if(this.head === this.tail)
				{
					// only one item in the list which is both head and tail
					this.tail = null;
				}
			this.head = this.head.next;
			currentNode.next = null;
			this.length--;
		}
		else if(currentNode === this.tail)
		{
			console.log("remove tail");
			this.tail = prevNode;
			this.tail.next = null;
			this.length--;
		}
		else
		{
			console.log("remove mid");
			prevNode.next = currentNode.next;
			currentNode.next = null;
			this.length--;
		}
	}
	
	
	
	
	reverse()
	{
		// needs debugging
		if(!this.head || !this.head.next)
		{
			// either the list is emty or theres one item in it 
			return undefined;
		}
		
		
		let lastNode = null;
		let middleNode = this.head;
		let leadNode = this.head.next;
		
		while(middleNode)
		{
			
			middleNode.next = lastNode;
			
			lastNode = middleNode;
			middleNode = leadNode;
			if(leadNode.next)
			{
				leadNode = leadNode.next;
			}
			
			
		}
		
		// reverse head and tail pointers
		const headPtr = this.head;
		this.head = this.tail;
		this.tail = headPtr;
		
		
	}
	
	
}

//   <--one  two --> three --> null
//   <--one<---two  three-> null

//<-- one <-- two <-- three 



//const linkedTest = new LinkedList();
//const linkedTest2 = new LinkedList();

//linkedTest.prepend("one");

//linkedTest2.append("one");

//linkedTest.traverse();
//linkedTest2.traverse();

//linkedTest.prepend("two");





class LinkedListDLL {
	
	constructor() {
		
		this.length = 0;
		this.head = null;
		this.tail = null;
		
	}
	
	append(data)
	{
		const newNode = new NodeDLL(data, null, null);
		
		if(!this.tail)
		{
			this.head = newNode;
			this.tail = this.head;
			
		}
		else
		{
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		
	}
	
	prepend(data)
	{
		const newNode = new NodeDLL(data, null, null);
		
		if(!this.head)
		{
			this.head = newNode;
			this.tail = this.head;
		}
		else
		{
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		
		this.length++;
	}
	
	
	removeHead()
	{
		
		
		if()
	}
	
	removeTail()
	{
		
	}
	
	
	traverse()
	{
		
		
		
	}
	
}






