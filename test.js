console.log("You know JS")

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

const arr = 
// [1, 2, 3, 3, 4, 4, 5]
[1,2,3,4,5,5,6,7,7,7,7,8,8,8,9]

function removeRepeat (arr) {
    
    // Remove Repeating
    // let newArr = []
    // for(let i =0; i < arr.length; i++){
    //     if(arr[i] != arr[i-1]){
    //         newArr.push(arr[i])
    //     } else {
    //         newArr.pop(arr[i])
    //     }
    // }
    // return newArr
    
    // Keep single repeat
    // return ([...new Set(arr)])
    
    // Go with regular
    // let newArr = []
    // for(let i =0; i < arr.length; i++){
    //     if(arr[i] != arr[i+1]) {
    //         newArr.push(arr[i])
    //     } 
    // }
    // return newArr
    
    let newArr = []
    for(let i =0; i < arr.length; i++){
        if(newArr.includes(arr[i])){
            // console.log(newArr)
            newArr.push(arr[i])
        }
    }
    return newArr
}

// _.uniq(arr)

console.log(removeRepeat(arr))
