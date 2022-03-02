











class Node:
	
	def __init__(self, data):
		
		self.data = data
		self.next = None
	
	
	
	






class LinkedList:
	
	
	def __init__(self):
		
		
		self.head = None
		self.tail = None
		
	
	
	
	def append(self, data):
		
		newNode = Node(data)
		
		if(self.head == None):
			
			self.head = newNode
			self.tail = self.head
		else:
			
			if(self.head == self.tail):
				
				self.tail = newNode
				self.head.next = newNode
				
			else:
				
				self.tail.next = newNode
				self.tail = newNode
				
			
			
		
		
	
	
	
	
	
	def printList(self):
		
		
		currentNode = self.head 
		
		while(currentNode != None):
			
			print(currentNode.data)
			currentNode = currentNode.next 
			
		
		
		
		
	
	





























	
