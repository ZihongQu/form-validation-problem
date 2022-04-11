import React from "react";
import "./FormSection.css";

const FormSection = () => {
  const emailValidate = () => {
    const email = document.querySelector("#email");
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emailError = email.parentNode.querySelector(".errorText");

    if (!email.value.match(pattern)) {
      email.parentNode.classList.add("error");
      if (!emailError) {
        emailError = document.createElement("span");
        emailError.innerText = "Email input invalid!";
        emailError.className = "errorText";
        email.parentNode.append(emailError);
      }
    } else {
      if (emailError) {
        email.parentNode.classList.remove("error");
      }
      if (emailError) {
        email.parentNode.removeChild(emailError);
      }
    }
  };

  const pwdValidate = () => {
    const pwd = document.querySelector("#password");
    let pwdError = pwd.parentNode.querySelector(".errorText");

    if (pwd.value.length <= 8) {
      pwd.parentNode.classList.add("error");
      if (!pwdError) {
        pwdError = document.createElement("span");
        pwdError.innerText = "Password must be longer than 8 characters!";
        pwdError.className = "errorText";
        pwd.parentNode.append(pwdError);
      }
    } else {
      if (pwd.parentNode.classList.contains("error")) {
        pwd.parentNode.classList.remove("error");
      }
      if (pwdError) {
        pwd.parentNode.removeChild(pwdError);
      }
    }
  };

  const colorValidate = () => {
    const colour = document.querySelector("#colour");
    let colourError = colour.parentNode.querySelector(".errorText");

    if (colour.value === "") {
      colour.parentNode.classList.add("error");
      if (!colourError) {
        colourError = document.createElement("span");
        colourError.innerText = "Colour cannot be empty!";
        colourError.className = "errorText";
        colour.parentNode.append(colourError);
      }
    } else {
      if (colour.parentNode.classList.contains("error")) {
        colour.parentNode.classList.remove("error");
      }
      if (colourError) {
        colour.parentNode.removeChild(colourError);
      }
    }
  };

  const animalValidate = (animalArray) => {
    var checkboxes = document.querySelector("input[type=checkbox]");
    let animalError = checkboxes.parentNode.querySelector(".errorText");

    if (animalArray.length < 2) {
      checkboxes.parentNode.classList.add("error");
      if (!animalError) {
        animalError = document.createElement("span");
        animalError.innerText = "At least two animals must be chosen!";
        animalError.className = "errorText";
        checkboxes.parentNode.append(animalError);
      }
    } else {
      if (checkboxes.parentNode.classList.contains("error")) {
        checkboxes.parentNode.classList.remove("error");
      }
      if (animalError) {
        checkboxes.parentNode.removeChild(animalError);
      }
    }
  };

  const tigerTypeValidate = (animalArray) => {
    const type_of_tiger = document.querySelector("#tiger_type");
    let typeOfTigerError = type_of_tiger.parentNode.querySelector(".errorText");

    if (animalArray.includes("tiger") && type_of_tiger.value === "") {
      type_of_tiger.parentNode.classList.add("error");
      if (!typeOfTigerError) {
        typeOfTigerError = document.createElement("span");
        typeOfTigerError.innerText = "Type of tiger must be provided!";
        typeOfTigerError.className = "errorText";
        type_of_tiger.parentNode.append(typeOfTigerError);
      }
    } else {
      if (type_of_tiger.parentNode.classList.contains("error")) {
        type_of_tiger.parentNode.classList.remove("error");
      }
      if (typeOfTigerError) {
        type_of_tiger.parentNode.removeChild(typeOfTigerError);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailValidate();
    pwdValidate();
    colorValidate();

    var animalArray = [];
    var selections = document.querySelectorAll("input[type=checkbox]:checked");

    for (var i = 0; i < selections.length; i++) {
      animalArray.push(selections[i].value);
    }
    animalValidate(animalArray);
    tigerTypeValidate(animalArray);
  };

  return (
    <form method="post" action="" onSubmit={handleSubmit}>
      <h1>Fill out this awesome form</h1>
      <fieldset>
        <h3>Your details</h3>
        <p>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="error"
            type="password"
            id="password"
            name="username"
          />
        </p>
      </fieldset>

      <fieldset>
        <h3>Your animal</h3>
        <p>
          <label className="label" htmlFor="colour">
            Colour
          </label>
          <select name="colour" id="colour">
            <option value="">Choose colour</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
          </select>
        </p>
        <p>
          <span className="label"> Animal </span>

          <input type="checkbox" name="animal" value="bear" id="bear" />
          <label htmlFor="bear"> Bear </label>

          <input type="checkbox" name="animal" value="tiger" id="tiger" />
          <label htmlFor="tiger"> Tiger </label>

          <input type="checkbox" name="animal" value="snake" id="snake" />
          <label htmlFor="snake"> Snake </label>

          <input type="checkbox" name="animal" value="donkey" id="donkey" />
          <label htmlFor="donkey"> Donkey </label>
        </p>
        <p>
          <label className="label" htmlFor="tiger_type">
            {" "}
            Type of tiger{" "}
          </label>
          <input type="text" name="tiger_type" id="tiger_type" />
        </p>
      </fieldset>
      <fieldset>
        <p>
          <input type="submit" value="Create account" />
        </p>
      </fieldset>
    </form>
  );
};

export default FormSection;
