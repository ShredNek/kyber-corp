import React, { useState } from "react";
import "./index.css";

function SubmitFormAndImage() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    trainer: "",
    padawanid: "",
    caste: "",
  });

  const [checked, setChecked] = useState({
    advertisementcheckbox: true,
  });

  function handleChange(event) {
    const { name, value, checked } = event.target;

    setInput((prevInput) => {
      console.log(name + " NOT CHECKED VAL: " + value);
      return {
        ...prevInput,
        [name]: value,
      };
    });

    setChecked((prevChecked) => {
      console.log(name + " CHECKED VAL: " + checked);
      return {
        ...prevChecked,
        [name]: checked,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newJedi = {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phonenumber: input.phonenumber,
      trainer: input.trainer,
      padawanid: input.padawanid,
      caste: input.caste,
      advertisementcheckbox: checked.advertisementcheckbox,
    };

    console.log(newJedi);

    setInput({
      firstName: "",
      lastName: "",
      email: "",
      phonenumber: "",
      trainer: "",
      padawanid: "",
      caste: "",
    });
    setChecked({ advertisementcheckbox: true });
  }

  return (
    <div className="flex flex-row grow-0 h-3/4 relative">
      <form action="submit" className="w-full m-1">
        <h2 className="text-5xl font-semibold text-white my-4 mt-16">
          Enlist Today
        </h2>
        <h4 className="text-sm font-extralight text-white my-2 mb-8">
          Fill out your details to contact your local Jedi Knight
        </h4>
        <div className="flex">
          <input
            onChange={handleChange}
            value={input.firstName}
            type="text"
            name="firstName"
            id="submit-form__firstname"
            placeholder="First name"
            className="submit-form-my"
          />
          <input
            onChange={handleChange}
            value={input.lastName}
            type="text"
            name="lastName"
            id="submit-form__lastname"
            placeholder="Last name"
            className="submit-form-my ml-6"
          />
        </div>
        <input
          onChange={handleChange}
          value={input.email}
          type="text"
          name="email"
          id="submit-form__email"
          placeholder="Contact Email"
          className="submit-form-my w-full"
        />
        <input
          onChange={handleChange}
          value={input.phonenumber}
          type="text"
          name="phonenumber"
          id="submit-form__phonenumber"
          placeholder="Contact number"
          className="submit-form-my"
        />
        <input
          onChange={handleChange}
          value={input.trainer}
          type="text"
          name="trainer"
          id="submit-form__trainer"
          placeholder="Your Jedi Trainer"
          className="submit-form-my"
        />
        <input
          onChange={handleChange}
          value={input.padawanid}
          type="text"
          name="padawanid"
          id="submit-form__padawanid"
          placeholder="Your Padawan Id"
          className="submit-form-my"
        />
        <input
          onChange={handleChange}
          value={input.caste}
          type="text"
          name="caste"
          id="submit-form__caste"
          placeholder="Your Caste"
          className="submit-form-my"
        />
        <div className="flex my-5 -mx-1 w-full h-8 ;">
          <input
            onChange={handleChange}
            value={input.advertisementcheckbox}
            defaultChecked={true}
            type="checkbox"
            name="advertisementcheckbox"
            id="submit-form__advertisementcheckbox"
            className="mr-4 w-[60px]"
          />
          <p className="text-white font-light text-[10px] leading-none">
            Check this box to receive helpful information from our finest jedi
            masters. Visit our{" "}
            <button className="underline">Privacy Statement</button> at any time
            to update your subscription settings or unsubscribe.
          </p>
        </div>
        <button
          onClick={handleClick}
          type="button"
          name="submit-form__submitbutton"
          id="submit-form__submitbutton"
          className="submit-form-my font-bold text-[1.25rem] not-italic bg-indigo-500 text-white h-12"
        >
          Enlist
        </button>
        <p className="text-white font-light text-[10px] leading-none text-center">
          Visit our <button className="underline">Privacy Statement</button> to
          learn more about how we process your data and your rights as a data
          subject
        </p>
      </form>
      <div className="w-full md:relative absolute min-w-[120px] ">
        <img
          src="images/guard.png"
          alt="A jedi-temple guardian"
          className="absolute inset-x-4 h-full w-full object-cover md:h-[800px] lg:max-w-md lg: m-auto"
        />
      </div>
    </div>
  );
}

export default SubmitFormAndImage;
