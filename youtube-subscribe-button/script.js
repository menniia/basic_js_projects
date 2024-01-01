function subscribe() {
    const subscribeElement = document.querySelector(".js-subscribe-button");

    if (subscribeElement.innerHTML === "Subscribe") {
      subscribeElement.innerHTML = "Subscribed";
      subscribeElement.classList.add("is-subscribed");
    } else {
      subscribeElement.innerHTML = "Subscribe";
      subscribeElement.classList.remove("is-subscribed");
    }
  }