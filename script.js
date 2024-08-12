const main = document.querySelector("main");
const emailRight = document.querySelector(".valid-email-required");
const input = document.querySelector("input");
const subBtn = document.getElementById("subscribe-btn");
const section = document.querySelector("section");
const confirmedEmail = document.querySelector(".confirmed-email");
const dismissBtn = document.getElementById("dismiss-btn");
const form = document.getElementById("form");

function formReset() {
  form.reset();
}

const handleSubmit = (e) => {
  e.preventDefault(e);

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  if (data.email.match(regex)) {
    main.classList.add("hidden");
    section.classList.remove("hidden");

    emailRight.classList.add("hidden");
    input.classList.remove("error-input");

    confirmedEmail.textContent = data.email;
    input.value = "";
  } else {
    emailRight.classList.remove("hidden");
    input.classList.add("error-input");
    if (data.email === "") emailRight.textContent = "Please insert your email";
    else emailRight.textContent = "Incorrect email formatting";
  }
};

form.addEventListener("submit", handleSubmit);

input.addEventListener("click", () => {
  emailRight.classList.add("hidden");
  input.classList.remove("error-input");
});

dismissBtn.addEventListener("click", () => {
  main.classList.remove("hidden");
  section.classList.add("hidden");
});
