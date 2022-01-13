import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const KeyValueEdit = () => {
  const [keyValue, setKeyValue] = useState({});
  const [valueDecode, setValueDecode] = useState();

  const params = useParams();

  useEffect(() => {
    function getKeyValueEdit() {
      axios.get(`http://127.0.0.1:8500/v1/kv/${params.value}`).then((res) => {
        setKeyValue(res.data[0]);
        setValueDecode(atob(res.data[0].Value));
      });
    }

    getKeyValueEdit();
  }, []);

  return (
    <div className="content">
      <h1>{keyValue.Key}</h1>
      {!keyValue && <span>Bune</span>}
      {keyValue && <span>Value: {valueDecode}</span>}
    </div>
  );
};

export default KeyValueEdit;
