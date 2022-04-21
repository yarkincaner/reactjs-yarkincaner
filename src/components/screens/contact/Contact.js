import { React, useRef } from "react";
import "./Contact.scss";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {};

  return (
    <div className="p-24 flex justify-center">
      <form
        action=""
        className="flex flex-col justify-center rounded-md form-container"
      >
        <label
          htmlFor=""
          className="text-white text-center text-4xl font-bold p-6"
        >
          Email me
        </label>

        <div className="flex flex-row flex-wrap justify-center px-4">
          <div className="flex flex-col p-4">
            <label htmlFor="" className="text-xl font-semibold text-white pb-4">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col p-4">
            <label htmlFor="" className="text-xl font-semibold text-white pb-4">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              className="rounded-md"
            />
          </div>
        </div>

        <div className="py-4 px-8 flex flex-col">
          <label htmlFor="" className="text-xl font-semibold text-white pb-4">
            Your email
          </label>
          <input
            type="text"
            name="email"
            placeholder="example@mail.com"
            className="rounded-md"
          />
        </div>

        <div className="py-4 px-8 flex flex-col">
          <label htmlFor="" className="text-xl font-semibold text-white pb-4">
            Topic
          </label>
          <input
            type="text"
            name="email"
            placeholder="I have a question about ..."
            className="rounded-md"
          />
        </div>

        <div className="pt-4 pb-6 px-8 flex flex-col">
          <label htmlFor="" className="text-xl font-semibold text-white pb-4">
            Your message
          </label>
          <textarea name="" rows={8} className="rounded-md resize-y"></textarea>
        </div>

        <button
          type="button"
          class="form-submit-button text-white font-medium rounded-lg text-sm p-4 ml-8 mb-4 justify-center w-1/4"
        >
          Blue
        </button>
      </form>
    </div>
  );
}
