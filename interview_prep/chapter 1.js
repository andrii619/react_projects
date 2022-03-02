

Strings 


1.4 Palindrome permutation



function isPalindromePerm(str)
{
	// O(n)
	if(!str || str.length <= 0)
		return false;
	
	// go through the string and count all char freqencies
	let freq = {};
	
	for(let i=0; i<str.length; i++)
	{
		let currentChar = str.charAt(i);
		if(currentChar === ' ')
		{
			continue;
		}
		
		if(freq[currentChar])
		{
			freq[currentChar]++;
		}
		else
		{
			freq[currentChar] = 1;
		}
		
	}
	let numOdd = 0;
	for(const character in freq)
	{
		
		if(freq[character] % 2 !== 0)
		{
			numOdd++;
		}
		
		if(numOdd > 1)
		{
			return false;
		}
		
		
	}
	return true;
}




/*
	not even needed :P
*/
function isPalindrome(str) {
	
	
	if(!str || str.length === 0)
	{
		return false;
	}
	
	let i = 0;
	let j = str.length - 1;
	
	
	while(i<j && i < str.length && j >= 0)
	{
		console.log(str.charAt(i), str.charAt(j));
		if(str.charAt(i) === ' ')
		{
			i++;
			//console.log("here 1");
			continue;
		}
		
		if(str.charAt(j) === ' ')
		{
			j--;
			//console.log("here 2");
			continue;
		}
		
		if(str.charAt(i) !== str.charAt(j))
		{
			//console.log("here 3");
			return false;
		}
		
		i++;
		j--;
		
	}
	
	
	return true;
	
	
	
}





//-----------------------------------------------------------




//1.5 Off by one



function offByOne(str1, str2)
{
	
	if(!str1 || !str2 || str1.length <=0 || str2.length <=0)
		return false;
	
	if( Math.abs(str1.length - str2.length)  > 1)
		return false;
	
	
	let numEdits = 0;
	let i = j = 0;
	
	while( i < str1.length && j < str2.length)
	{
		
		if(numEdits > 1)
		{
			return false;
		}
		
		
		if(str1.charAt(i) === str2.charAt(j))
		{
			i++;
			j++;
			continue;
		}
		else
		{
			// insertion or deletion
			if(i + 1 < str1.length)
			{
				if(str1.charAt(i+1) === str2.charAt(j))
				{
					i++;
					numEdits++;
					continue;
				}
				else
				{
					// two edits
					return false;
				}
			}
			
			
		}
		
		
		
		
		
	}
	
	if()
	
	
	
	return true;
}



//-------------------------------------------------------

// 1.6 string compression



function stringCompress(str) {
	
	if(!str || str.length <=0)
		return str;
	
	
	let compressedStr = [];
	
	
	for(let i = 0; i< str.length;)
	{
		
		let charCount = 1;
		
		for(j=i+1;j<str.length;j++)
		{
			if(str[j] !== str[i])
			{
				break;
			}
			else
			{
				charCount++;
			}
		}
		
		compressedStr.push(str[i]);
		compressedStr.push(charCount);
		console.log("CHar ", str[i], charCount);
		// increment i by charCount
		i = i + charCount;
		
	}
	
	compressedStr = compressedStr.join("");
	console.log("comp", compressedStr);
	if(str.length<=compressedStr.length)
	{
		return str;
	}
	
	return compressedStr;
}





//---------------------------------------------------------------------

// 1.8 zero matrix




function setZero(mat, r, c)
{
	
	if(!mat)
	{
		return mat;
	}
	
	if(r<0 || c<0 || r>mat.length || c> mat[0].length)
	{
		return mat;
	}
	
	for(let i = 0; i<mat[0].length; i++)
	{
		mat[r][i] = 0;
	}
	
	for(let j=0; j<mat.length; j++)
	{
		mat[j][c] = 0;
	}
	
	return mat;
}






















































