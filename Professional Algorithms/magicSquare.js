// Check the array that has 9 numbers
// if its index 0,3,6 sum equals to 15 and 1,4,7 sum equals to 15 and 2,5,8 sum equals to 15 
// at the same time index 0,1,2 sum equals to 15 and index 3,4,5 sum equals to 15 and index 6,7,8 sum equals to 15
// and also at the same time; index 0,4,8 sum equals to 15 and index 2,4,6 sum equals to 15
// if all of them are correct then return true
// if not return false

function magicSquare(arr){
    if(((arr[0] + arr[3] + arr[6] === 15) && (arr[1] + arr[4] + arr[7] === 15) && (arr[2] + arr[5] + arr[8] === 15)) && ((arr[0] + arr[1] + arr[2] === 15 )&& (arr[3] + arr[4] + arr[5] === 15) && (arr[6] + arr[7] + arr[8] === 15)) && ((arr[0] + arr[4] + arr[8] === 15)) && ((arr[2] + arr[4] + arr[6] === 15)) ) {
        console.log([[arr[0],arr[1],arr[2]],
            [arr[3],arr[4],arr[5]],
            [arr[6],arr[7],arr[8]]]);
        return true
    } else{
        return false 
    }
}

console.log(magicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8] ));