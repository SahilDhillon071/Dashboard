import React, { useState } from 'react';
import styled from 'styled-components';
import Dashboard from './Dashboard';

// Styled components for the Customer and Pet Information
const CustomerPetInfoContainer = styled.div`
  background-color: #1c243500;
  padding: 20px;
`;

const CustomerPetInfoTable = styled.table`
  width: 146%;
  border-collapse: collapse;
  margin-bottom: 20px;
  th, td {
    padding: 10px;
  }
  th {
    background-color: #3498DB;
    color: #fff;
  }
  tr:hover{
    color: #fff;
    cursor: pointer;
  }
  tr:nth-child(odd){
 
 background: rgba(24,24,24,.7);

}
`;

const Store = () => {
  // Sample data for customer and pet information
  const [customerPets, setCustomerPets] = useState([
    {
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      petName: 'Buddy',
      petType: 'Dog',
      petBreed: 'Golden Retriever',
      petAge: 3,
      medicalHistory: 'None',
    },
    {
        "customerName": "Alice Smith",
        "customerEmail": "alice@example.com",
        "petName": "Whiskers",
        "petType": "Cat",
        "petBreed": "Siamese",
        "petAge": 2,
        "medicalHistory": "Regular vaccinations"
    },
    {
        "customerName": "David Johnson",
        "customerEmail": "david@example.com",
        "petName": "Rex",
        "petType": "Dog",
        "petBreed": "German Shepherd",
        "petAge": 5,
        "medicalHistory": "Allergies, requires special diet"
    },
    {
        "customerName": "Emily Wilson",
        "customerEmail": "emily@example.com",
        "petName": "Coco",
        "petType": "Dog",
        "petBreed": "Labrador Retriever",
        "petAge": 1,
        "medicalHistory": "Spayed, no medical issues"
    },
    {
        "customerName": "Michael Brown",
        "customerEmail": "michael@example.com",
        "petName": "Fluffy",
        "petType": "Cat",
        "petBreed": "Maine Coon",
        "petAge": 4,
        "medicalHistory": "Recent dental checkup"
    },
   
      
      
      
      

      
    // Add more customer and pet information as needed
  ]);

  return (
    <>
    <Dashboard />
    <CustomerPetInfoContainer>
      <h2>Customer and Pet Information</h2>
      <CustomerPetInfoTable>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Pet Breed</th>
            <th>Age</th>
            <th>Medical History</th>
          </tr>
        </thead>
        <tbody>
          {customerPets.map((petInfo, index) => (
            <tr key={index}>
              <td>{petInfo.customerName}</td>
              <td>{petInfo.customerEmail}</td>
              <td>{petInfo.petName}</td>
              <td>{petInfo.petType}</td>
              <td>{petInfo.petBreed}</td>
              <td>{petInfo.petAge}</td>
              <td>{petInfo.medicalHistory}</td>
            </tr>
          ))}
        </tbody>
      </CustomerPetInfoTable>
    </CustomerPetInfoContainer>
    </>
  );
};

export default Store;
