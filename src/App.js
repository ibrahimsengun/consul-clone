import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Navigation from "./components/Navigation";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Services from "./components/Services";
import Nodes from "./components/Nodes";
import KeyValue from "./components/KeyValue";

const App = () => {
  const [dataCenter, setDataCenter] = useState();

  useEffect(() => {
    async function fetchData() {
      axios.get("http://localhost:8500/v1/catalog/datacenters").then((res) => {
        setDataCenter(res.data);
      });
    }

    fetchData();
  }, []);

  return (
    <Fragment>
      <h1 style={{ backgroundColor: "gray" }}>Datacenter: {dataCenter}</h1>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/nodes" element={<Nodes />} />
          <Route path="/kv" element={<KeyValue />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
