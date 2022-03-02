

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


class MyArray
{
	
	constuctor()
	{
		this.length = 0;
		this.data = {};
		
		//console.log(args);
		
		//if(args.length >= 0)
		//{
		//	this.length = args.length;
		//	for (var i = 0; i < args.length; i++)
		//	{
		//		console.log(args[i]);
		//		this.data[i] = args[i];
		//	}
		//}
	}
	
	
	get(index)
	{
		return this.data[index];
	}
	
	
	push(item)
	{
		this.data[this.length] = item;
		return this.length++;
	}
	
	pop()
	{
		const last = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length--;
		return last;
	}
	
	shift()
	{
		const first = this.data[0];
		
		for(let i=0; i< this.length-1; i++)
		{
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length-1];
		
		return first;
	}
	
	unshift(newItem)
	{
		
		
		for(let i=this.length; i>0; i--)
		{
			this.data[i] = this.data[i-1];
		}
		
		this.data[0] = newItem;
		return this.length++;
		
		
	}
	
	/*
		find an item in the array and return index. -1 if the item was not found
	*/
	indexOf(item)
	{
		for(let i=0; i<this.length; i++)
		{
			if(this.data[i] === item)
			{
				return i;
			}
		}
		return -1;
	}
	
	
	/*
		removes numItems from the array staarting at position. returns the removed items
	*/
	splice(position, numItems)
	{
		
	}
	
	
	/*
		
		copy an array
		
	*/
	slice()
	{
		const copyArray = new MyArray()
		
		for(let i =0; i < this.length; i++)
		{
			copyArray[i] = this.data[i];
		}
		
		copyArray.length = this.length;
		
		return copyArray;
	}
	
}























