import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const list = {
      text: text,
    };
    setData([...data, list]);
    setText("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="textinput">Enter Text</label>
        </div>
        <div>
          <input
            type="text"
            id="textinput"
            placeholeder="enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button>Submit</button>
        <div>
          {data.map((i) => {
            return <h3>{i.text}</h3>;
          })}
        </div>
      </form>
    </div>
  );
};

export default Form;
