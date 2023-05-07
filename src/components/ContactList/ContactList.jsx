import React from 'react';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>{name}:</p>
            <p>{number}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
