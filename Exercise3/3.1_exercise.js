const input1 = [
'Downloads',
'Videos',
'capture',
'mp4',
];

// Create your function here to get this output =>  'Downloads/Videos/capture.mp4'
/**
 * Calculate path with the extension of the file add to last element
 * @param {Array : string} input1 
 * @returns Path string
 */
const pathInput1 = (input1)  => {
  return input1[0] + '/' + input1[1] + '/' + input1[2] + '.' + input1[3]
}; 
const firstOutput = pathInput1(input1);
console.log(firstOutput)

// Create a function to get this output => 'CodinGame/python.py'
const input2 = [
'CodinGame',
'python',
'py',
];

/**Calculate path with the extension of the file add to last element
 * 
 * @param {Array : string} input2 
 * @returns Path string
 */
const pathInput2 = (input2) => {
  return input2[0] +  '/' + input2[1] + '.' + input2[2]
}; 
const secondOutput = pathInput2(input2);
console.log(secondOutput)

//Create a function to get this code => 'programming/languages/easy/beginner/useful/pythonstuff.py'
const input3 = [
'programming',
'languages',
'easy',
'beginner',
'useful',
'pythonstuff',
'py',
];

/**Calculate path with the extension of the file add to last element
 * 
 * @param {Array : string} input3 
 * @returns Path string
 */
const pathInput3 = (input3) => {
  const newArray = [...input3]
  const lastElement = newArray.pop()
  const joinArray = newArray.join('/');
  return joinArray + '.' + lastElement ;
};
const thirdOutput =pathInput3(input3);
console.log(thirdOutput)

// con bucle for
const input3for = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
];

const pathInput3WithFor = (input3for) => {
    let path = '';
    const lastIndex = input3for.length - 1;
    const lastElement = input3for[lastIndex];

    for (let i = 0; i < lastIndex; i++) {
        if (i > 0) {
            path += '/';
        }
        path += input3for[i];
    }
    
    return path + '.' + lastElement;
};

const forOutoput = pathInput3WithFor(input3for);
console.log(forOutoput);