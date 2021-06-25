/* eslint-disable import/no-unresolved */
const calculate = (str) => {
    const first = /^-?0*[0-9]{1,3}/.exec(str).toString();
    const operator = str[first.length];
    const last = str.slice(first.length + 1);
    let result = Number(first);
    if (operator === '+') {
        result += Number(last);
    }
    else if (operator === '-') {
        result -= Number(last);
    }
    else if (operator === 'X') {
        result *= Number(last);
    }
    else if (operator === '/') {
        result = Math.floor(result / Number(last));
    }
    return result;
};
export default calculate;
