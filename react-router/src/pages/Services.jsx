import React from "react";
import Service1 from "../components/Service1";
import Service2 from "../components/Service2";
import Service3 from "../components/Service3";

import { NavLink, Outlet } from "react-router-dom";

function Services() {
  const services = ["service1", "service2", "service3"];
  return (
    <>
      <h2>Services List</h2>

      <ul>
        <li>
          {services.map((service) => (
            <li key={service}>
              <NavLink to={`${service}`}>{service}</NavLink>
            </li>
          ))}
        </li>
      </ul>

      <Outlet />
    </>
  );
}

export default Services;
