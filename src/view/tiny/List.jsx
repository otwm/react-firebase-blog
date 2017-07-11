import React from 'react';

function List({ list, Template }) {
  return (
    <ul>
      {
        list.map((item, index) =>
          <li key={index} >
            <Template {...item} />
          </li>
        )
      }
    </ul>
  );
}

export default List;