import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./KeyValueCreate.css";

const KeyValueCreate = ({ datacenter }) => {
  const keyRef = useRef();
  const valueRef = useRef();

  const navigate = useNavigate();

  async function submitHandler(event) {
    event.preventDefault();

    console.log(JSON.parse(valueRef.current.value));
    await axios.put(
      `http://127.0.0.1:8500/v1/kv/${keyRef.current.value}?dc=${datacenter}`,
      JSON.stringify(JSON.parse(valueRef.current.value))
    );

    navigate("/kv");
  }

  return (
    <div className="content form-style">
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" placeholder="Key" ref={keyRef} />
        </div>

        <div>
          <textarea id="value" rows="6" placeholder="Value" ref={valueRef} />
        </div>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default KeyValueCreate;
