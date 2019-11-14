import React, { useState } from 'react';
import UserSetup from './components/UserSetup';
import User from './components/User';
import styled from 'styled-components';

import './App.css';

const FormContainer = styled.div`
  text-align: center;
`;

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
  //Export addNewUser to 'UserSetup' to create new user
  const addNewUser = user => {
    const newUser = {
      id: Date.now(),
      name: user.name,
      email: user.email,
      role: user.role
    };
    setUsers([...users, newUser]);
  };

  return (
    <FormContainer>
      <h1>Team Baskova Team Recruitment</h1>
      <UserSetup addNewUser={addNewUser} />
      <User users={users} />
    </FormContainer>
  );
}

export default App;
