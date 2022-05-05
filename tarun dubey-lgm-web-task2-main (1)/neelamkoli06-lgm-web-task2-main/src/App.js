import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [Users, setUser] = useState([]);
  const loadUsers = async () => {
    // console.log('before');
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUser(jsonResponse);
  };

  return (
    <div className="App">
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Get Users</button>

      <h2>Users:</h2>
      <ul>
        {Users.map(({ id, login, avatar_url }) => (
          <li key={id}>
            Name: {login}
            Avatar: {avatar_url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
