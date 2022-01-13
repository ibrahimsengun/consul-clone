import React from "react";

const ServiceItem = ({ service }) => {
  return (
    <li>
      <h3>{service.Name}</h3>
      <span>{service.InstanceCount} instance</span>
    </li>
  );
};

export default ServiceItem;
