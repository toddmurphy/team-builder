import React, { useState } from 'react';
import UserSetup from './components/UserSetup';
import User from './components/User';

import './App.css';

function App() {
  //Setup inital state with one state "object" with three keys/fields --> name(input), email(input), role(textarea)
  //Export state to 'Form' via props to display new users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Todd Murphy',
      email: 'todd@test.com',
      role: 'Lambda fullstack web developer student'
    }
  ]);

  //Add functionality to 'create' or add a new user, use ... spread operator to clone users

  return (
    <div>
      <h1>Todd's forms</h1>
      <UserSetup />
      <User users={users} />
    </div>
  );
}

export default App;
