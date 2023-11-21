import React from 'react';
import {NavLink} from 'react-router-dom';

function Left(props) {
    
  return (
    <>
      {
        props.data.map((element,index) =>{
            return (
                <NavLink key={index} to={`/${element.provinsi}`} className='prov_list'
                >{element.provinsi}</NavLink>
            )
        })
      }
    </>
  );
}

export default Left;