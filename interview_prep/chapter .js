



// 8.1 



function numWays(steps)
{
    if(steps === 0)
    {
        return 1; // one step can only get covered in 1 way
    }
    else if(steps < 0)
    {
        return 0;
    }
    else
    {
        return (numWays(steps-1) + (numWays(steps-2)) + (numWays(steps-3)) );
    }
}


// 8.2

let maze = Array(5).fill().map(()=>{return Array(5).fill(0)});
maze[2][2] = 1;
maze[2][3] = 1;
maze[2][4] = 1;
maze[3][2] = 1;


let p = findPath(maze);

function findPath(maze)
{
    if(!maze || !maze.length || !maze[0].length)
    {
        return null;
    }
    let visited = (new Array(maze.length)).fill().map(() => {return new Array(maze[0].length).fill(false)});

    let path = [];
    let exists = findPath2(maze, visited, {r:maze.length-1,c:maze[0].length-1}, path);

    if(exists)
    {
        console.log(path);
        return path;
    }
}



function findPath2(maze,visited, loc, currentPath)
{
    console.log("loc ", loc);
    console.log("visited ", visited);
    console.log("current ", currentPath);
    if(loc.r < 0 || loc.r >= maze.length || loc.c < 0 || loc.c >= maze[0].length)
    {
        return false;
    }
    if(loc.r === 0 && loc.c === 0)
    {
        visited[0][0] = true;
        currentPath.push({r:0,c:0});
        console.log("found path!");
        return true;
    }
    if(visited[loc.r][loc.c])
    {
        // we already visited this node
        console.log("visited");
        return false;
    }

    if(maze[loc.r][loc.c] == 1)
    {
        // an obstacle at current location
        visited[loc.r][loc.c] = true;
        return false;
    }

    // visit current location
    visited[loc.r][loc.c] = true;
    console.log("visiting ",loc.r, loc.c);
    if(findPath2(maze, visited, {r:loc.r-1,c:loc.c}, currentPath) || findPath2(maze, visited, {r:loc.r,c:loc.c-1}, currentPath))
    {
        currentPath.push({...loc});
        return true;
    }
}


// 8.3

function findMagic(arr, startIdx)
{
    let mid = Math.floor( (arr.length - startIdx)/2);
    if(arr[mid] = mid)
    {
        return mid;
    }
    else{
        if(arr[mid] > mid)
        {
            return -1;
        }
        else
        {
            return findMagic(arr, mid);
        }
    }
}

function findMagicIdx(arr)
{
    if(!arr || arr.length <= 0)
    {
        return -1;
    }
    return findMagic(arr, 0);
}













