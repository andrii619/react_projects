





class HashTable
{
	constructor(size)
	{
		this.data = new Array(size);
	}
	
	
	_hash(key)
	{
		let hash = 0;
		for (let i =0; i < key.length; i++)
		{
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}
		return hash;
	}
	
	
	set(key, value)
	{
		if(!key)
		{
			// if the key is undefined or empty string we return
			return;
		}
		
		if(typeof(key) !== "string")
		{
			key = key.toString();
		}
		
		//console.log(key, value);
		const bucket = this.data[this._hash(key)];
		
		if(!bucket)
		{
			// create a new bucket with one item in it 
			//console.log("creating new bucket");
			this.data[this._hash(key)] = [{key, value}];
			//bucket = [{key, value}];
		}
		else
		{
			// we have a collision, add the item to the end of the bucket
			//console.log("adding to bucket")
			//this.data[this._hash(key)].push({key, value})
			//bucket.push({key, value});
			for(let item of bucket)
			{
				//console.log("searching through bucket: ", item);
				if(item.key === key)
				{
					item.value = value; // change the value of the item
					return;
				}
			}
			// did not return so we did not find it 
			bucket.push({key, value});
		}
		
		//console.log(this.data);
		
	}
	
	
	get(key)
	{
		if(!key)
		{
			return undefined;
		}
		if(typeof(key) !== "string")
		{
			key = key.toString();
		}
		// array that holds objects
		const bucket = this.data[this._hash(key)];
		
		if(!bucket)
		{
			//console.log("found no bucket");
			return undefined;
		}
		
		for(let item of bucket)
		{
			//console.log("searching through bucket: ", item);
			if(item.key === key)
			{
				return item.value;
			}
		}
		
		// could not find item
		return undefined;
	}
	
	keys()
	{
		const kaysArray = [];
		
		
		
	}
	
}



const myHashTable = new HashTable(20);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')







































