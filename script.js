const main = document.querySelector("main");
const emailRight = document.querySelector(".valid-email-required");
const input = document.querySelector("input");
const subBtn = document.getElementById("subscribe-btn");
const section = document.querySelector("section");
const confirmedEmail = document.querySelector(".confirmed-email");
const dismissBtn = document.getElementById("dismiss-btn");

input.addEventListener("click", () => {
  emailRight.classList.add("hidden");
  input.classList.remove("error-input");
});

subBtn.addEventListener("click", () => {
  const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  if (input.value.match(regex)) {
    main.classList.add("hidden");
    section.classList.remove("hidden");

    emailRight.classList.add("hidden");
    input.classList.remove("error-input");

    confirmedEmail.textContent = input.value;
    input.value = "";
  } else {
    emailRight.classList.remove("hidden");
    input.classList.add("error-input");
    if (input.value === "") emailRight.textContent = "Please insert your email";
    else emailRight.textContent = "Incorrect email formatting";
  }
});

dismissBtn.addEventListener("click", () => {
  main.classList.remove("hidden");
  section.classList.add("hidden");
});
