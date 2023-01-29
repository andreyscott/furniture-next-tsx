import React from "react";
import "./styles.css";

export default function FormPage () {
  function Submit(e:any) {
    // const formEle = document.querySelector("form");
    // const formDatab = new FormData(formEle);
    const formDatab = new FormData(e.target.form);
    console.log(formDatab);
    fetch(
      "https://script.google.com/macros/s/AKfycbxUX4hu2QEQ7r9TwrSo9vAHydDXv4VwtEDUacCifXaEecIH2bWHQSnFWtd9NdNIUVGDdQ/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google sheet
        in React or Vanilla jS
      </h2>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />
          <button type="submit" onClick={
            (e) => Submit(e)
          }>
            Click me
            </button>        </form>
      </div>
    </div>
  );
}