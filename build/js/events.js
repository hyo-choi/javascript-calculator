/* eslint-disable import/no-unresolved */
// eslint-disable-next-line arrow-body-style
import calculate from './calc.js';
import $total from './constants.js';
const onDigitsClicked = (e) => {
    const $target = e.target;
    const digit = $target.innerText;
    if ($total.classList.contains('error')
        || !$target.classList.contains('digit')) {
        return;
    }
    if (/^-?0*[0-9]{0,2}$/.test($total.innerText)
        || /^-?0*[0-9]{1,3}[-+/X]-?0*[0-9]{0,2}$/.test($total.innerText)) {
        if ($total.innerText === '0') {
            $total.innerText = digit;
        }
        else {
            $total.innerText += digit;
        }
    }
};
const onModifiersClicked = (e) => {
    const $target = e.target;
    if (!$target.classList.contains('modifier') || $target.innerText !== 'AC') {
        return;
    }
    $total.innerText = '0';
    $total.classList.remove('error');
};
const onOperationsClicked = (e) => {
    const $target = e.target;
    const operator = $target.innerText;
    if ($total.classList.contains('error') || !$target.classList.contains('operation')) {
        return;
    }
    if (operator === '=' && !/[1-9]{4}/.test($total.innerText)) {
        $total.innerText = String(calculate($total.innerText));
        return;
    }
    if (!/^-?0*[0-9]{1,3}$/.test($total.innerText)) {
        if (operator === '-' && /^-?0*[0-9]{1,3}[-+X/]$/.test($total.innerText)) {
            $total.innerText += operator;
        }
        return;
    }
    if ($total.innerText === '0' && operator === '-') {
        $total.innerText = operator;
    }
    else {
        $total.innerText += operator;
    }
};
const setEventListener = () => {
    const $digits = document.querySelector('.digits');
    const $modifiers = document.querySelector('.modifiers');
    const $operations = document.querySelector('.operations');
    $digits.addEventListener('click', onDigitsClicked);
    $modifiers.addEventListener('click', onModifiersClicked);
    $operations.addEventListener('click', onOperationsClicked);
};
export default setEventListener;
