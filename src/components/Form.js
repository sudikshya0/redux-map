import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Form = () => {
  const data = useSelector((state) => state?.list);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: text,
    });
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
          {console.log(data)}
          {data.map((i) => {
            return <h3>{i}</h3>;
          })}
        </div>
      </form>
    </div>
  );
};

export default Form;
