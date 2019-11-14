import React from 'react';
import styled from 'styled-components';

const UserContainter = styled.div`
  display: flex;
  justify-content: center;
`;

const SingleUser = styled.div`
  width: 30%;
  margin: 3% 1%;
  background: salmon;
  color: white;
  border-radius: 7px;
  padding: 2% 2%;
`;

const Form = props => {
  //need to display props for--> name(input), email(input), role(textarea)
  return (
    <UserContainter>
      {props.users.map(user => (
        <SingleUser key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </SingleUser>
      ))}
    </UserContainter>
  );
};

export default Form;
