//SETS
// const numbers = [1, 2, 3, 4, 5, 5, 2]
// use set to remove duplicate values
// const uniqueNums = new Set(numbers);

//BELOW- are built in methods you can use with sets

    // uniqueNums.add(9)
    // uniqueNums.delete(2)
        //console.log(uniqueNums);


    //const hasNum = uniqueNums.has(4);
        //console.log(hasNum);


    // const valueIterator = uniqueNums.values();
    //for(const value of valueIterator) {
        //console.log(value);
    //};


    // const sizeNums = uniqueNums.size;
        //console.log(sizeNums)


    // uniqueNums.forEach((values) => {
        //console.log(values);
    // });


    // uniqueNums.clear()
        //console.log(uniqueNums);


/*
Code Challenge HW : Sum of Distinct Pairs

Given an array of integers and a target sum, write a function sumOfDistinctPairs(arr, target) 
that finds all distinct pairs in the array that, when added together, equal the target sum. 
Each pair should be represented as an array of two integers, 
and the entire result should be an array of these pairs. 
Remember to use the Set object in your solution.

let arr = [1, 3, 2, 2, 4, 5];
let target = 5;

sumOfDistinctPair(arr, target) => [[1, 4], [3, 2]];

1. initialize an empty array, result = [];
2. convert the arr into a set to eliminate duplicates; let newArr = [1,2,3,4,5]
3. ForEach value  in my newArr, targetval 5-el; 
5-1 = 4 X 
5-2 = 3 X 
5-3= 2 X 
5-4 = 1
*/




