const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

// for(let i =0 ; i< arr.length; i++) {
//     console.log(arr[i]);
// }


const darr = [[1,2,3], [4,5,6], [7,8,9]];

// for(let i = 0; i<darr.length; i++)
// {
//     for(let j = 0; j<darr[i].length; j++)
//     {
//         console.log(`i : $[i] , elements : ${darr[i][j]}`);
//     }
// }


for(let i = 0; i<darr.length; i++)
{
    if(i== 0) continue //skip first iteration 
    for(let j = 0; j<darr[i].length; j++)
    {
        if(j == 2) break
        console.log(`i : ${i} , elements : ${darr[i][j]}`);
    }
}
