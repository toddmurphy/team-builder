import React, { useState } from 'react';

const FormSetup = props => {
  //Setup for a single 'user' (use key/fields from inital state(App.js)--> name, email, role)
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: ''
  });

  //Setup the onChange handler to watch and use when the 'state' change with computed properties on each input(use ...spread operator)
  const changeHandler = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //Setup the onSubmit functionality to 'create' a new note -->
  //use 'event.addPreventDefault()'--> stops the page from refreshing 'onSubmit'
  // use 'addNewUser' passed from and created in App.js
  //Reset values back to blank string using empty strings
  //Add 'addNewuser' imported from App.js to create new user
  const submitUser = event => {
    event.preventDefault();
    props.addNewUser(user);
    setUser({ name: '', email: '', role: '' });
  };

  return (
    // Form setup --> 3 keys/fields for: name(input), email(input), role(textarea)
    //add changeHandlers to each input
    //add onSubmit to the form element
    //add 'value' to each each input to capture text input
    <form onSubmit={submitUser}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" onChange={changeHandler} value={user.name} />
      <label htmlFor="email">Email</label>
      <input id="email" type="text" name="email" onChange={changeHandler} value={user.email} />
      <label htmlFor="role">Role</label>
      <textarea id="role" name="role" onChange={changeHandler} value={user.role} />
      <button type="submit">Submit form</button>
    </form>
  );
};

export default FormSetup;
