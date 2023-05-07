import React from 'react';
import shortid from 'shortid';

export const Filter = ({ filter, onChange }) => {
  const filterId = shortid.generate();
  return (
    <>
      <label htmlFor={filterId}>
        Find contacts by name
        <input
          onChange={onChange}
          type="text"
          name="filter"
          id={filterId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={filter}
        />
      </label>
    </>
  );
};
