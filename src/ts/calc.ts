/* eslint-disable import/no-unresolved */
const calculate = (str: string) => {
  const first: string = /^-?0*[0-9]{1,3}/.exec(str)!.toString();
  const operator: string = str[first.length]!;
  const last: string = str.slice(first.length + 1)!;
  let result: number = Number(first);

  if (operator === '+') {
    result += Number(last);
  } else if (operator === '-') {
    result -= Number(last);
  } else if (operator === 'X') {
    result *= Number(last);
  } else if (operator === '/') {
    result = Math.floor(result / Number(last));
  }
  return result;
};

export default calculate;
