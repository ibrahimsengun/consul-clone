import React from "react";
import { useNavigate } from "react-router-dom";

const KVItem = ({ value }) => {
  let navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/kv/${value}/edit`);
      }}
    >
      <h3>{value}</h3>
    </li>
  );
};

export default KVItem;
