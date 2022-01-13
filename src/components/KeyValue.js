import axios from "axios";
import React, { useEffect, useState } from "react";
import KVItem from "./Items/KVItem";
import Card from "./UI/Card";

const KeyValue = ({ datacenter }) => {
  const [keyValue, setKeyValue] = useState([]);

  useEffect(() => {
    async function getKeyValues() {
      await axios
        .get(`http://127.0.0.1:8500/v1/kv/?keys&dc=${datacenter}`)
        .then((res) => {
          setKeyValue(res.data);
        });
    }

    getKeyValues();
  }, [datacenter]);

  return (
    <div className="content">
      <h1>Key / Value</h1>
      <Card>
        <ul>
          {keyValue.map((value) => (
            <KVItem key={value} value={value} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default KeyValue;
