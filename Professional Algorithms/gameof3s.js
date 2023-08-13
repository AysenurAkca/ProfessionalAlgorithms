// Before we should check the parameter(num) if it is number, if not, log a warning string
// Create a while loop that will last as long as num is greater than 1
// If num equals to 1 then return 1 and break the loop
// If when number divided by 3, if remain is 1, then subtract 1 from the number,log the num and -1,and reassign num to num/3 
// If when number divided by 3, if remain is 2, then add 1 to the number,log the num and 1,and reassign num to num/3 
// If number can be divided 3,log the num and 0, reassign num to num/3

function gameOf3s(num) {
    if (!isNaN(num)) {
        while (num >= 1) {
            if (num === 1) {
                console.log(`${num}`);
                break;
            } else if (num % 3 === 1) {
                console.log(`${num} -1 `);
                num -= 1
                num = num / 3
            } else if (num % 3 === 2) {
                console.log(`${num} 1`);
                num += 1
                num = num / 3
            }
            else if (num % 3 === 0) {
                console.log(`${num} 0 `);
                num = num / 3
            }
        }
    } 
    else{
        console.log("please enter a number");
    }
}
gameOf3s(27);

