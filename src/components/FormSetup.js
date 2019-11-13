import React, { useState } from 'react';

const FormSetup = () => {
  //Setup for a single 'user' (use key/fields from inital state(App.js)--> name, email, role)
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: ''
  });

  //Setup the onChange handler to watch and use when the 'state' change on each input(use ...spread operator)

  //Setup the onSubmit functionality to 'create' a new note -->use 'addNewUser' passed from and created in App.js

  return (
    // Form setup --> 3 keys/fields for: name(input), email(input), role(textarea)
    <form>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="email">Email</label>
      <input id="email" type="text" name="email" />
      <label htmlFor="role">Role</label>
      <textarea id="role" name="role" />
      <button type="submit">Submit form</button>
    </form>
  );
};

export default FormSetup;
