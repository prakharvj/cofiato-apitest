import React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

const UsersData = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => console.log("Error >", error));
  });
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "username", headerName: "Username", width: 100 },
    { field: "email", headerName: "Email", width: 200 },
  ];

  interface Rows {
    name: string;
    id: number;
    username: string;
    email: string;
  }

  let rows: Rows[] = [];
  Users.forEach((user: Rows) =>
    rows.push({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    })
  );

  return (
    <div style={{ height: "800px", width: "100%" }}>
      <h3 style={{ marginLeft: "150x" }}>Users data</h3>

      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
};

export default UsersData;
