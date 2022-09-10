import React from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
function App() {
  // let students = ["anil", "bhushan", "vishal", "priyanka"];
  let students = [
    { name: "anil", email: "anil@test.com", contact: 1111 },
    { name: "bhushan", email: "bhushan@test.com", contact: 2222 },
    { name: "vishal ", email: "vishal@test.com", contact: 3333 },
    { name: "priyanka", email: "priyanka@test.com", contact: 4444 },
  ];
  return (
    <div className="App">
      <h1>Welcome to Table list</h1>

      <Table striped bordered hover>
        <tbody>
          <td>Name</td>
          <td>Email</td>
          <td>contact</td>
          {students.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
