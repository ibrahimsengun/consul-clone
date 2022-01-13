import axios from "axios";
import React, { useEffect, useState } from "react";
import NodeItem from "./Items/NodeItem";
import Card from "./UI/Card";

const Nodes = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    async function getNodes() {
      await axios
        .get("http://127.0.0.1:8500/v1/internal/ui/nodes")
        .then((res) => {
          setNodes(res.data);
        });
    }

    getNodes();
  }, []);

  console.log(nodes);

  return (
    <div className="content">
      <h1>
        Nodes <em>{nodes.length} total</em>
      </h1>
      <Card>
        <ul>
          {nodes.map((node) => (
            <NodeItem key={node.Node} node={node} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Nodes;
