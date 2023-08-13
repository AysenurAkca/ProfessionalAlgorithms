// Create a function that accepts 3 parameters
// if the previous word's first letter equals to its uppercase version
// Then replace the previous word with next word with uppercase
// return the changed string

function myReplace(str, before, after) {
    if(before[0]==before[0].toUpperCase()){
        return str.replace(before,after[0].toUpperCase()+after.slice(1))
    }
    return str.replace(before,after)
}
    
console.log(myReplace("A quick Brown fox jumped over the lazy dog", "Brown", "leaped"));

