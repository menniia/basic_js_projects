function handleCostKeyDown(event) {
    if (event.key === "Enter") {
      calculateTotal();
    }
  }
  function calculateTotal() {
    const inputElement = document.querySelector(".js-cost-input");
    const outputElement = document.querySelector(".js-total-cost");
    let cost = Number(inputElement.value);

    if (cost < 40 && cost > 0) {
      cost += 10;
      outputElement.classList.remove('errorMessage');
    } else if (cost > 40) {
      cost
    } else if (cost < 0) {
        cost = 'Error: cannot be less than GH₵0';
        outputElement.classList.add('errorMessage');
    } else if (cost !== Number) {
        cost = 'Error: cost has to be a Number';
        outputElement.classList.add('errorMessage');
    }

    outputElement.innerHTML = `GH₵ ${cost}`;
  }