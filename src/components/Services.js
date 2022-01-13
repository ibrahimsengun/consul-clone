import axios from "axios";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function getServices() {
      await axios
        .get("http://127.0.0.1:8500/v1/internal/ui/services")
        .then((res) => {
          setServices(res.data);
        });
    }

    getServices();
  }, []);

  console.log(services);

  return (
    <div className="content">
      <h1>Services</h1>

      <ul>
        {services.map((service) => (
          <li key={service.Name}>
            {service.Name} - {service.InstanceCount} instance
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
