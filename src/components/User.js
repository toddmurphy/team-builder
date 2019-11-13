import React, { useState } from 'react';

const Form = props => {
  //need to display props for--> name(input), email(input), role(textarea)
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Form;
