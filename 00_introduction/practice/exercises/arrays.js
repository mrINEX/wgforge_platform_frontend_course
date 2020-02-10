/*
Given a list of strings, return the count of the number of
strings where the string length is 2 or more and the first
and last chars of the string are the same.

['abc', 'aa', 'bb'] yields 2
*/
export function matchEnds(words) {
  let count = 0;
  words.map((elem) => {
    if(elem.length > 1 && elem[0] === elem[elem.length - 1]) {
      count += 1;
    }
  })
  return count;
}

/*
Given an array of numbers, return new array where
first element is diffrence between maximum and minimum of passed array
last element is sum of minimum and maximum
and passed array in center
[1, 2, 3] yields [2, 1, 2, 3, 4]
[5, 2, 14] yields [12, 5, 2, 14, 16]
*/
export function addFirstAndLast(numbers) {

  // let min = Math.max(...numbers) - Math.min(...numbers);
  // let max = Math.min(...numbers) + Math.max(...numbers);
  // numbers.push(max);
  // numbers.unshift(min);
  // return numbers;

  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let sumMIN = max + min;
  let sumMAX = max - min;
  numbers.push(sumMIN);
  numbers.unshift(sumMAX);
  return numbers;
}

/*
Given a list of strings, return a list with the strings
in sorted order, except group all the strings that begin with 'x' first.
e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
Hint: this can be done by making 2 lists and sorting each of them
before combining them.
*/
export function xLetterFirst(words) {
  let ar = []
  words.sort();
  ar.unshift(words.pop());
  ar.unshift(words.pop());
  return ar.concat(words);
}

/*
Given a list of non-empty arrays, return a list sorted in increasing
order by the last element in each tuple.
e.g. [[1, 7], [1, 3], [3, 4, 5], [2, 2]] yields
[[2, 2], [1, 3], [3, 4, 5], [1, 7]]
*/
export function sortByLast(nestedArrays) {
  let arr = [];
  let index = [];
  let result = [];
  for(let i = 0; i < nestedArrays.length; i += 1) {
    index.push(nestedArrays[i][1]);
    arr.push(nestedArrays[i])
  }
  for(let i = 0; i < nestedArrays.length; i += 1) {
    result.push(nestedArrays[index.indexOf(Math.min(...index))]);
    index[index.indexOf(Math.min(...index))] = Infinity;
  }
  return result;
}
