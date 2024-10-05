import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  // 27. Create a function that will receive an array of numbers as argument and return a new array with distinct elements
  const distinctElements = (arr) => [...new Set(arr)];

  // 28. Calculate the sum of first 100 prime numbers and return them in an array
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const sumFirst100Primes = () => {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes.reduce((acc, prime) => acc + prime, 0);
  };

  // 29. Print the distance between the first 100 prime numbers
  const primeDistances = () => {
    const primes = [];
    let num = 2;
    while (primes.length < 100) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes.map((prime, idx) => idx > 0 ? prime - primes[idx - 1] : 0);
  };

  // 30. Create a function that will add two positive numbers of indefinite size.
  const addLargeNumbers = (num1, num2) => {
    let carry = 0;
    let result = '';
    
    let maxLength = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');
  
    for (let i = maxLength - 1; i >= 0; i--) {
      let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }
    if (carry) result = carry + result;
    
    return result;
  };

  // 31. Create a function that will return the number of words in a text
  const wordCount = (text) => {
    return text.trim().split(/\s+/).length;
  };

  // 32. Create a function that will capitalize the first letter of each word in a text
  const capitalizeWords = (text) => {
    return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  };

  // 33. Calculate the sum of numbers received in a comma delimited string
  const sumDelimitedString = (str) => {
    return str.split(',').reduce((sum, num) => sum + parseFloat(num), 0);
  };

  // 34. Create a function that returns an array with words inside a text.
  const wordsArray = (text) => {
    return text.trim().split(/\s+/);
  };

  // 35. Create a function to convert a CSV text to a bi-dimensional array
  const csvToArray = (csv) => {
    return csv.trim().split('\n').map(row => row.split(','));
  };

  // 36. Create a function that converts a string to an array of characters
  const stringToCharArray = (str) => {
    return str.split('');
  };

  // 37. Create a function that converts a string to an array containing ASCII codes of each character
  const stringToAsciiArray = (str) => {
    return str.split('').map(char => char.charCodeAt(0));
  };

  // 38. Create a function that converts an array containing ASCII codes in a string
  const asciiArrayToString = (asciiArr) => {
    return asciiArr.map(code => String.fromCharCode(code)).join('');
  };

  // 39. Implement the Caesar cipher
  const caesarCipher = (text, shift) => {
    return text.replace(/[a-z]/gi, (char) => {
      let code = char.charCodeAt(0);
      let base = code < 97 ? 65 : 97;
      return String.fromCharCode(((code - base + shift) % 26) + base);
    });
  };

  // 40. Implement the bubble sort algorithm for an array of numbers
  const bubbleSort = (arr) => {
    let n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  };

  // 41. Create a function to calculate the distance between two points defined by their x, y coordinates
  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // 42. Create a function that will return a Boolean value indicating if two circles intersect
  const doCirclesIntersect = (x1, y1, r1, x2, y2, r2) => {
    const distance = calculateDistance(x1, y1, x2, y2);
    return distance <= r1 + r2;
  };

  // 43. Create a function that will extract a specified column from a bi-dimensional array
  const extractColumn = (matrix, colIndex) => {
    return matrix.map(row => row[colIndex]);
  };

  // 44. Create a function that will convert a string containing a binary number into a number
  const binaryStringToNumber = (binaryStr) => {
    return parseInt(binaryStr, 2);
  };

  // 45. Create a function to calculate the sum of all the numbers in a jagged array
  const sumJaggedArray = (jaggedArray) => {
    return jaggedArray.flat().reduce((acc, num) => acc + num, 0);
  };

  // 46. Find the maximum number in a jagged array of numbers
  const maxInJaggedArray = (jaggedArray) => {
    return Math.max(...jaggedArray.flat());
  };

  // 47. Deep copy a jagged array with numbers or other arrays
  const deepCopyJaggedArray = (jaggedArray) => {
    return JSON.parse(JSON.stringify(jaggedArray));
  };

  // 48. Create a function to return the longest word in a string
  const longestWord = (text) => {
    const words = text.split(/\s+/);
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
  };

  // 49. Shuffle an array of strings
  const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  // 50. Create a function that will return an array of n random unique numbers from 1 to n
  const randomUniqueNumbers = (n) => {
    const nums = new Set();
    while (nums.size < n) {
      nums.add(Math.floor(Math.random() * n) + 1);
    }
    return Array.from(nums);
  };

  // 51. Find the frequency of letters inside a string
  const letterFrequency = (str) => {
    const frequency = {};
    for (const letter of str) {
      if (letter.match(/[a-z]/i)) {
        frequency[letter] = (frequency[letter] || 0) + 1;
      }
    }
    return Object.entries(frequency);
  };

  // 52. Calculate Fibonacci(500) with high precision (all digits)
  const fibonacci = (n) => {
    const fib = [0n, 1n];
    for (let i = 2; i <= n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib[n].toString();
  };

  // 53. Calculate 70! with high precision (all digits)
  const factorial = (n) => {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
    }
    return result.toString();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.resultContainer}>
        {/* 27 */}
        <Text style={styles.header}>27. Distinct Elements:</Text>
        <Text>{distinctElements([1, 2, 2, 3, 4, 4, 5]).join(', ')}</Text>

        {/* 28 */}
        <Text style={styles.header}>28. Sum of First 100 Primes:</Text>
        <Text>{sumFirst100Primes()}</Text>

        {/* 29 */}
        <Text style={styles.header}>29. Prime Distances:</Text>
        <Text>{primeDistances().join(', ')}</Text>

        {/* 30 */}
        <Text style={styles.header}>30. Add Large Numbers:</Text>
        <Text>{addLargeNumbers('123456789123456789', '987654321987654321')}</Text>

        {/* 31 */}
        <Text style={styles.header}>31. Word Count:</Text>
        <Text>{wordCount('Hello world! This is a test sentence.')}</Text>

        {/* 32 */}
        <Text style={styles.header}>32. Capitalize Words:</Text>
        <Text>{capitalizeWords('hello world')}</Text>

        {/* 33 */}
        <Text style={styles.header}>33. Sum of Delimited String:</Text>
        <Text>{sumDelimitedString('1,2,3,4,5')}</Text>

        {/* 34 */}
        <Text style={styles.header}>34. Words Array:</Text>
        <Text>{wordsArray('Hello world, this is a test.').join(', ')}</Text>

        {/* 35 */}
        <Text style={styles.header}>35. CSV to Array:</Text>
        <Text>{JSON.stringify(csvToArray('1,2,3\n4,5,6\n7,8,9'))}</Text>

        {/* 36 */}
        <Text style={styles.header}>36. String to Char Array:</Text>
        <Text>{stringToCharArray('Hello').join(', ')}</Text>

        {/* 37 */}
        <Text style={styles.header}>37. String to ASCII Array:</Text>
        <Text>{stringToAsciiArray('Hello').join(', ')}</Text>

        {/* 38 */}
        <Text style={styles.header}>38. ASCII Array to String:</Text>
        <Text>{asciiArrayToString([72, 101, 108, 108, 111])}</Text>

        {/* 39 */}
        <Text style={styles.header}>39. Caesar Cipher (shift 3):</Text>
        <Text>{caesarCipher('Hello', 3)}</Text>

        {/* 40 */}
        <Text style={styles.header}>40. Bubble Sort:</Text>
        <Text>{bubbleSort([5, 3, 8, 4, 2]).join(', ')}</Text>

        {/* 41 */}
        <Text style={styles.header}>41. Distance between Points (1, 2) and (4, 6):</Text>
        <Text>{calculateDistance(1, 2, 4, 6)}</Text>

        {/* 42 */}
        <Text style={styles.header}>42. Do Circles Intersect (center1: (0, 0), r1: 5; center2: (3, 4), r2: 5):</Text>
        <Text>{doCirclesIntersect(0, 0, 5, 3, 4, 5).toString()}</Text>

        {/* 43 */}
        <Text style={styles.header}>43. Extract Column 1 from 2D Array:</Text>
        <Text>{extractColumn([[1, 2], [3, 4], [5, 6]], 1).join(', ')}</Text>

        {/* 44 */}
        <Text style={styles.header}>44. Binary String to Number (1010):</Text>
        <Text>{binaryStringToNumber('1010')}</Text>

        {/* 45 */}
        <Text style={styles.header}>45. Sum of Jagged Array:</Text>
        <Text>{sumJaggedArray([[1, 2], [3], [4, 5, 6]]).toString()}</Text>

        {/* 46 */}
        <Text style={styles.header}>46. Max in Jagged Array:</Text>
        <Text>{maxInJaggedArray([[1, 2], [3], [4, 5, 6]]).toString()}</Text>

        {/* 47 */}
        <Text style={styles.header}>47. Deep Copy Jagged Array:</Text>
        <Text>{JSON.stringify(deepCopyJaggedArray([[1, 2], [3], [4, 5, 6]]))}</Text>

        {/* 48 */}
        <Text style={styles.header}>48. Longest Word in String:</Text>
        <Text>{longestWord('This is a test string to find the longest word.')}</Text>

        {/* 49 */}
        <Text style={styles.header}>49. Shuffle Array:</Text>
        <Text>{shuffleArray(['apple', 'banana', 'cherry', 'date']).join(', ')}</Text>

        {/* 50 */}
        <Text style={styles.header}>50. Unique Random Numbers (n=10):</Text>
        <Text>{randomUniqueNumbers(10).join(', ')}</Text>

        {/* 51 */}
        <Text style={styles.header}>51. Letter Frequency:</Text>
        <Text>{JSON.stringify(letterFrequency('hello world'))}</Text>

        {/* 52 */}
        <Text style={styles.header}>52. Fibonacci(500):</Text>
        <Text>{fibonacci(500)}</Text>

        {/* 53 */}
        <Text style={styles.header}>53. Factorial of 70:</Text>
        <Text>{factorial(70)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  resultContainer: {
    marginVertical: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
