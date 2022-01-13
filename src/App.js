import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Navigation from "./components/Navigation";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Services from "./components/Services";
import Nodes from "./components/Nodes";
import KeyValue from "./components/KeyValue";
import KeyValueEdit from "./components/KeyValueEdit";
import KeyValueCreate from "./components/KeyValueCreate";

const App = () => {
  const [datacenter, setDatacenter] = useState();

  useEffect(() => {
    async function fetchData() {
      axios.get("http://localhost:8500/v1/catalog/datacenters").then((res) => {
        setDatacenter(res.data);
      });
    }

    fetchData();
  }, []);

  return (
    <Fragment>
      <h1>Datacenter: {datacenter}</h1>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/nodes" element={<Nodes />} />
          <Route path="/kv" element={<KeyValue datacenter={datacenter} />} />
          <Route path="/kv/:value/edit" element={<KeyValueEdit />} />
          <Route
            path="/kv/create"
            element={<KeyValueCreate datacenter={datacenter} />}
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
