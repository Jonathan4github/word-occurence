
const word = (InputValue) => {
  if (!(InputValue)) {
    return 'Enter a string of words'
  }
  if ((typeof (InputValue)) === 'number' || 'array' || 'object') {
    return 'Input must be string'
  }
  let inputArray = ((InputValue.split(' ')).filter((content) => content.trim() !== '')),
    count = {};

  inputArray.forEach((elem) => {
    count[elem] = count[elem] + 1 || 1;
  });

  return count.toString();

}
export default word;
