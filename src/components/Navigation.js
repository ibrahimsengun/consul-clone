import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="sidebar">
        <NavLink to="/services">
          Services
        </NavLink>
        <NavLink to="/nodes">Nodes</NavLink>
        <NavLink to="/kv">Key/Value</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
