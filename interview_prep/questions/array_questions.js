












function reverseString(toReverse)
{
	// javascript way of reversing string
	// const strReverse = str.split('').reverse().join('')
	// const strReverse = [...str].reverse().join('')
	
	// split the string into array of characters
	
	if(!toReverse || typeof(toReverse) !== "string")
	{
		return undefined;
	}
	
	const chars = toReverse.split("")
	
	for(let i=0,j=chars.length-1; i < j; i++, j--)
	{
		let first = chars[i];
		let second = chars[j];
		console.log("swapping ", first, second);
		chars[i] = second;
		chars[j] = first;
	}
	
	return chars.join("");
}




function mergeSortedArrays(array1, array2)
{
	
	if(!array1 || !array2 || array1.length === 0 || array2.length === 0)
	{
		return undefined;
	}
	
	let i=0;
	let j = 0;
	const mergedArray = []
	
	while( i < array1.length || j < array2.length )
	{
		
		if(i < array1.length && j < array2.length)
		{
			if(array1[i] < array2[j])
			{
				mergedArray.push(array1[i]);
				i++;
			}
			else
			{
				mergedArray.push(array2[j]);
				j++;
			}
		}
		else
		{
			if(i>= array1.length)
			{
				while(j < array2.length)
				{
					mergedArray.push(array2[j]);
					j++;
				}
			}
			else
			{
				while(i < array1.length)
				{
					mergedArray.push(array1[i]);
					i++;
				}
			}
		}
	}
	return mergedArray;
}






function mergeSortedArrays2(array1, array2)
{
	
	if(!array1 || !array2 || array1.length === 0 || array2.length === 0)
	{
		return undefined;
	}
	
	let i=0;
	let j = 0;
	const mergedArray = []
	
	while( i < array1.length || j < array2.length )
	{
		
		if( (j >= array2.length) || array1[i] < array2[j])
		{
			mergedArray.push(array1[i]);
			i++;
		}
		else
		{
			mergedArray.push(array2[j]);
			j++;
		}
	}
	return mergedArray;
}

































