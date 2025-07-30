//REVERSE
function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

//Remove duplicates from an array
function removeDuplicates(arr) {
  return [new Set(arr)];
}

//  Count vowels in a string
function countVowels(str)
{
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str)
    {
    if (vowels.includes(char))
        //include tells about (searchString: string, position?: number):
        {
         count++;
        }
    }
  return count;
}
console.log(reverseWords("Programming Language")); 
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5]));
console.log(countVowels("JavaScript is fun"));
