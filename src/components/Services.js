import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceItem from "./Items/ServiceItem";
import Card from "./UI/Card";

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
      <h1>
        Services <em>{services.length} total</em>
      </h1>

      <Card>
        <ul>
          {services.map((service) => (
            <ServiceItem key={service.Name} service={service} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Services;
