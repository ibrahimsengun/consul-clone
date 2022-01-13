import React from "react";

const NodeItem = ({ node }) => {
  return (
    <li>
      <h3>{node.Node}</h3>
      <span>{node.Services.length} Service</span>
    </li>
  );
};

export default NodeItem;
