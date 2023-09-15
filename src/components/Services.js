import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";

const ServicesAndPricesContainer = styled.div`
  background-color: #1c243500;
  padding: 20px;
`;

const ServiceTable = styled.table`
  width: 146%;
  border-collapse: collapse;
  th,
  td {
    padding: 10px;
  }
  th {
    background-color: #3498db;
    color: #fff;
  }
  tr:hover {
    color: #fff;
    cursor: pointer;
  }
  tr:nth-child(odd) {
    background: rgba(24, 24, 24, 0.7);
  }
`;

const Services = () => {
  const [services] = useState([
    {
      serviceName: "Pet Shower",
      serviceDescription: "Full bath and grooming for your pet",
      servicePrice: 45.99,
    },
    {
      serviceName: "Nail Cutting",
      serviceDescription: "Trimming your pet's nails",
      servicePrice: 15.99,
    },
    {
      serviceName: "Surgery",
      serviceDescription: "Medical surgery for pets",
      servicePrice: 250.0,
    },
  ]);

  return (
    <>
      <Dashboard />

      <ServicesAndPricesContainer>
        <h2>Services and Prices</h2>
        <ServiceTable>
          <thead>
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.serviceName}</td>
                <td>{service.serviceDescription}</td>
                <td>${service.servicePrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </ServiceTable>
      </ServicesAndPricesContainer>
    </>
  );
};

export default Services;
