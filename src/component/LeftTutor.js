import React from 'react';
import {NavLink} from 'react-router-dom';

function Left(props) {
    
  return (
    <>
        <NavLink key='0' to='/' className='prov_list'>Tutorial</NavLink>
    </>
  );
}

export default Left;