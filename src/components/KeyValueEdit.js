import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const KeyValueEdit = () => {
  const [keyValue, setKeyValue] = useState({});

  const params = useParams();

  useEffect(() => {
    function getKeyValueEdit() {
      axios.get(`http://127.0.0.1:8500/v1/kv/${params.value}`).then((res) => {
        setKeyValue(res.data[0]);
      });
    }

    getKeyValueEdit();
  }, []);

  return (
    <div className="content">
      <h1>{keyValue.Key}</h1>
      <span>Value: {keyValue.Value}</span>
    </div>
  );
};

export default KeyValueEdit;
