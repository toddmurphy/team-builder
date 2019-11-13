import React, { useState } from 'react';

const FormSetup = () => {
  return (
    // Form setup --> 3 keys/fields for: name(input), email(input), role(textarea)
    <form>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="email">Email</label>
      <input id="email" type="text" name="email" />
      <label htmlFor="role">Role</label>
      <textarea id="role" name="role" />
      <button>Submit form</button>
    </form>
  );
};

export default FormSetup;
