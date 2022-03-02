






function firstReccuring(arr)
{
	
	
	const seenCharacters = {}
	
	
	for(let i =0; i<arr.length; i++)
	{
		
		if(arr[i] in seenCharacters)
		{
			return arr[i];
		}
		else
		{
			seenCharacters[arr[i]] = i;
		}
		
		console.log(seenCharacters);
	}
	
	return undefined;
}
