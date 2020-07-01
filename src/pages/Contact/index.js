import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <main>
      <h1>contact</h1>
      <form
        onSubmit={() => {
          alert(`you sent your message (jk you didn't)`);
        }}
      >
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="subject"></input>
        <input type="text" placeholder="message"></input>
        <button> submit </button>
      </form>
    </main>
  );
};

export default Contact;
