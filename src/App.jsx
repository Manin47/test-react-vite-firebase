// src/App.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";

import Props from "./components/Props";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("users") // Nama tabel di Supabase
        .select("*"); // Mengambil semua kolom

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setUsers(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>Users from Supabase</h1> */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      <Props/>
    </div>
  );
};

export default App;
