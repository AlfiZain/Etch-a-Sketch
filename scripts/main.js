function displaySquare(dimension) {
  const containerEl = document.querySelector('.container');
  containerEl.replaceChildren();
  containerEl.style.setProperty('--dimension', dimension);

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      const divEl = document.createElement('div');
      divEl.classList.add('square');
      addTrailEffect(divEl);
      containerEl.appendChild(divEl);
    }
  }
}

function addTrailEffect(element) {
  const max = 10;
  let intensity = 0;

  element.addEventListener('mouseenter', () => {
    if (intensity >= max) return;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    intensity++;
    const alpha = intensity / max;
    element.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
  });
}

function getUserInputDimension() {
  const dimensionInfoEl = document.querySelector('#dimensionInfo');
  let inputDimension = prompt(
    'Insert new number of squares per side for the new grid (max 100)'
  );

  while (inputDimension < 1 || inputDimension > 100) {
    alert('Please insert number between 1 - 100');
    inputDimension = prompt(
      'Insert new number of squares per side for the new grid (max 100)'
    );
  }
  dimensionInfoEl.textContent = `Current Dimension: ${inputDimension}x${inputDimension}`;
  displaySquare(inputDimension);
}

function main() {
  const changeButtonEl = document.querySelector('#userInputDimension');
  const defaultDimenstion = 16;

  changeButtonEl.addEventListener('click', getUserInputDimension);
  displaySquare(defaultDimenstion);
}

main();
