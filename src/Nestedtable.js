import React from "react";
import "./App.css";
import Table from "react-bootstrap/Table";

function App() {
  let students = [
    {
      name: "anil",
      email: "anil@test.com",
      contact: 1111,
      address: { hn: 15, state: "MH", country: "India" },
    },
    {
      name: "bhushan",
      email: "bhushan@test.com",
      contact: 2222,
      address: { hn: 125, state: "MH", country: "India" },
    },
    {
      name: "vishal ",
      email: "vishal@test.com",
      contact: 3333,
      address: { hn: 105, state: "MH", country: "India" },
    },
    {
      name: "priyanka",
      email: "priyanka@test.com",
      contact: 4444,
      address: { hn: 205, state: "MH", country: "India" },
    },
  ];
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
        </tbody>
        {students.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
            <td>
              <tbody>
                {students.map((data, j) => (
                  <tr key={j}>
                    <td>{data.address.hn}</td>
                    <td>{data.address.state}</td>
                    <td>{data.address.country}</td>
                  </tr>
                ))}
              </tbody>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default App;
