// eslint-disable-next-line arrow-body-style
const $total: HTMLElement = document.getElementById('total')!;

const onDigitsClicked = (e: MouseEvent) => {
  const target: HTMLElement = e.target! as HTMLElement;
  if (!target.classList.contains('digit')) {
    return;
  }
  $total.innerText = target.innerText;
};

const onModifiersClicked = (e: MouseEvent) => {
  const target: HTMLElement = e.target! as HTMLElement;
  if (!target.classList.contains('modifier')) {
    return;
  }
  $total.innerText = target.innerText;
};

const onOperationsClicked = (e: MouseEvent) => {
  const target: HTMLElement = e.target! as HTMLElement;
  if (!target.classList.contains('operation')) {
    return;
  }
  $total.innerText = target.innerText;
};

const setEventListener = () => {
  const $digits: HTMLDivElement = document.querySelector('.digits')!;
  const $modifiers: HTMLDivElement = document.querySelector('.modifiers')!;
  const $operations: HTMLDivElement = document.querySelector('.operations')!;

  $digits.addEventListener('click', onDigitsClicked);
  $modifiers.addEventListener('click', onModifiersClicked);
  $operations.addEventListener('click', onOperationsClicked);
};

export default setEventListener;
